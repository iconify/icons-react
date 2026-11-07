import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c5cjgzbpf.css';
import '../../css/x/x09loybdy.css';
import '../../css/k/k9eq3dbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c5cjgzbpf"/><path class="x09loybdy"/><path class="k9eq3dbyp"/></g>`,
		"fallback": "solar:magnifier-slash-broken",
	});
}

export default Component;
