import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fkg_lub8t.css';
import '../../css/m/mz7areb_n.css';
import '../../css/n/nqp-qjzny.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fkg_lub8t"/><rect class="mz7areb_n"/><rect class="nqp-qjzny"/></g>`,
		"fallback": "streamline:interface-align-horizontal-left-align-design-left",
	});
}

export default Component;
