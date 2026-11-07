import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f8edcu39k.css';
import '../../css/a/a6s4ost_k.css';
import '../../css/s/spodu6bqp.css';
import '../../css/c/cvhlscc2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f8edcu39k"/><path class="a6s4ost_k"/><path class="spodu6bqp"/><path class="cvhlscc2a"/></g>`,
		"fallback": "solar:list-plus-minimalistic-broken",
	});
}

export default Component;
