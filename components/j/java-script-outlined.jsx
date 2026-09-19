import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqh1l2nbz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqh1l2nbz"/>`,
		"fallback": "ant-design:java-script-outlined",
	});
}

export default Component;
