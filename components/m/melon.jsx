import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nw1imxzmc.css';
import '../../css/n/nx395txhc.css';
import '../../css/t/truy7mboo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nw1imxzmc"/><path class="nx395txhc"/><path class="truy7mboo"/></g>`,
		"fallback": "fluent-emoji-flat:melon",
	});
}

export default Component;
