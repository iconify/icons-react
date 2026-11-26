import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/b/bxbxjvj0g.css';
import '../../css/f/f3xvl5fbe.css';
import '../../css/c/cb_h3pb7q.css';
import '../../css/k/k1fqiwbgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGcHBfFdeZ" cx="75.6" cy="83.6" r="139.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="bxbxjvj0g"/><path fill="url(#SVGcHBfFdeZ)" transform="matrix(2.5 0 0 2.5 2.86 2.86)" class="f3xvl5fbe"/><path class="cb_h3pb7q"/><path class="k1fqiwbgc"/>`,
		"fallback": "xero-emoji:wavy-dash",
	});
}

export default Component;
