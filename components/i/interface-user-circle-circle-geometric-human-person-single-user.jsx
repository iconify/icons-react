import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f9bv6mbbv.css';
import '../../css/f/fzamdldum.css';
import '../../css/x/xcv6q1bnv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="f9bv6mbbv"/><path class="fzamdldum"/><circle class="xcv6q1bnv"/></g>`,
		"fallback": "streamline:interface-user-circle-circle-geometric-human-person-single-user",
	});
}

export default Component;
