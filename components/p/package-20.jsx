import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts501wnao.css';
import '../../css/m/ma0bxjbgr.css';
import '../../css/m/mxvrl8fhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts501wnao"/><path class="ma0bxjbgr"/><path class="mxvrl8fhx"/>`,
		"fallback": "energy-icons:package-20",
	});
}

export default Component;
