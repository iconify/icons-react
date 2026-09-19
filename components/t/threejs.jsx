import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvkz6bqs.css';
import '../../css/v/vqu2gdbki.css';
import '../../css/s/ssaqwh2rm.css';
import '../../css/v/v8po-ibke.css';
import '../../css/p/ph8w3jssh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvkz6bqs"><path class="vqu2gdbki"/><path class="ssaqwh2rm"/><path class="v8po-ibke"/><path class="ph8w3jssh"/></g>`,
		"fallback": "devicon:threejs",
	});
}

export default Component;
