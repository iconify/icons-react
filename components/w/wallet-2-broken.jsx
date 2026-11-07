import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p9a5saclq.css';
import '../../css/i/ic59sq0-o.css';
import '../../css/a/a8ue-2cgj.css';
import '../../css/t/t2jvb6bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p9a5saclq"/><path class="ic59sq0-o"/><path class="a8ue-2cgj"/><path class="t2jvb6bpe"/><path class="t2jvb6bpe"/></g>`,
		"fallback": "solar:wallet-2-broken",
	});
}

export default Component;
