import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rykla9wen.css';
import '../../css/y/yv_brepse.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rykla9wen"/><path class="yv_brepse"/>`,
		"fallback": "ant-design:left-circle-outline",
	});
}

export default Component;
