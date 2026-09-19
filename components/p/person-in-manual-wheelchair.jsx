import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp9wi3bpj.css';
import '../../css/i/ie7lpxbir.css';
import '../../css/q/qpr0x4hrv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp9wi3bpj"/><path class="ie7lpxbir"/><path class="qpr0x4hrv"/>`,
		"fallback": "fluent-emoji-high-contrast:person-in-manual-wheelchair",
	});
}

export default Component;
