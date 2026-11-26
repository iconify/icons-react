import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na-405bju.css';
import '../../css/e/ejlffcc6s.css';
import '../../css/e/e_bzrod9z.css';
import '../../css/f/f4bt58bzj.css';
import '../../css/c/c3cakepku.css';
import '../../css/b/b0380bchc.css';
import '../../css/g/ge7rdzb6o.css';
import '../../css/k/kkim--7xd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGD0ILjdGE" cx="75.9" cy="100" r="137.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="na-405bju"/><stop offset=".85" class="ejlffcc6s"/><stop offset="1" class="ejlffcc6s"/></radialGradient></defs><g transform="matrix(2.6 0 0 2.6 .537 .537)"><path class="e_bzrod9z"/><path fill="url(#SVGD0ILjdGE)" class="f4bt58bzj"/><path class="c3cakepku"/><defs><clipPath id="SVGWHGSTcjy"><path class="b0380bchc"/></clipPath></defs><g clip-path="url(#SVGWHGSTcjy)"><path class="ge7rdzb6o"/></g><path class="kkim--7xd"/></g>`,
		"fallback": "xero-emoji:tennis",
	});
}

export default Component;
