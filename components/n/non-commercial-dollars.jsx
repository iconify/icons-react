import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ipd-k1b_h.css';
import '../../css/d/dln8ziysl.css';
import '../../css/g/geyqm2mnv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ipd-k1b_h"/><path class="dln8ziysl"/><path class="geyqm2mnv"/></g>`,
		"fallback": "streamline-flex:non-commercial-dollars",
	});
}

export default Component;
