import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vkq46fbed.css';
import '../../css/m/m1-6nzrja.css';
import '../../css/a/a_dpsab4r.css';
import '../../css/t/t2jvb6bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vkq46fbed"/><path class="m1-6nzrja"/><path class="a_dpsab4r"/><path class="t2jvb6bpe"/><path class="t2jvb6bpe"/></g>`,
		"fallback": "solar:wallet-2-broken",
	});
}

export default Component;
