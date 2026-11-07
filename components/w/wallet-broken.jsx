import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/acmhcgbix.css';
import '../../css/r/rf3amc9mv.css';
import '../../css/t/t2jvb6bpe.css';
import '../../css/i/ic59sq0-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="acmhcgbix"/><path class="rf3amc9mv"/><path class="t2jvb6bpe"/><path class="ic59sq0-o"/><path class="t2jvb6bpe"/></g>`,
		"fallback": "solar:wallet-broken",
	});
}

export default Component;
