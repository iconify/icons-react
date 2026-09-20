import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/acmhcgbix.css';
import '../../css/i/ihob04h8r.css';
import '../../css/t/t2jvb6bpe.css';
import '../../css/m/m1-6nzrja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="acmhcgbix"/><path class="ihob04h8r"/><path class="t2jvb6bpe"/><path class="m1-6nzrja"/><path class="t2jvb6bpe"/></g>`,
		"fallback": "solar:wallet-broken",
	});
}

export default Component;
