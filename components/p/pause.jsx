import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqci6gbsw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqci6gbsw"/>`,
		"fallback": "fa-solid:pause",
	});
}

export default Component;
