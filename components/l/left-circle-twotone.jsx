import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwaa64zik.css';
import '../../css/y/yv_brepse.css';
import '../../css/r/rykla9wen.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwaa64zik"/><path class="yv_brepse"/><path class="rykla9wen"/>`,
		"fallback": "ant-design:left-circle-twotone",
	});
}

export default Component;
