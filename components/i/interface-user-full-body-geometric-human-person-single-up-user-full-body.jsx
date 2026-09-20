import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xwb44uomz.css';
import '../../css/a/asqutc23r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xwb44uomz"/><path class="asqutc23r"/></g>`,
		"fallback": "streamline:interface-user-full-body-geometric-human-person-single-up-user-full-body",
	});
}

export default Component;
