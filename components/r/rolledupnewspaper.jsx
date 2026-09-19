import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltaxr799h.css';
import '../../css/d/dnv6m0b-s.css';
import '../../css/i/id2naacgj.css';
import '../../css/s/sbfhiccjv.css';
import '../../css/b/beutz49kd.css';
import '../../css/w/wb8f6ebds.css';
import '../../css/r/radv86ktc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltaxr799h"/><path class="dnv6m0b-s"/><path class="id2naacgj"/><path class="sbfhiccjv"/><path class="beutz49kd"/><path class="wb8f6ebds"/><path class="radv86ktc"/>`,
		"fallback": "fxemoji:rolledupnewspaper",
	});
}

export default Component;
