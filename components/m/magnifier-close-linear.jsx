import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hllyxzboc.css';
import '../../css/m/m50eg6ell.css';
import '../../css/c/c5cjgzbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="m50eg6ell"/><path class="c5cjgzbpf"/></g>`,
		"fallback": "solar:magnifier-close-linear",
	});
}

export default Component;
