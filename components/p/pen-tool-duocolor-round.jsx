import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/og3vf3u0p.css';
import '../../css/a/a2n2tzl8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="og3vf3u0p"/><path class="a2n2tzl8v"/></g>`,
		"fallback": "coolicons:pen-tool-duocolor-round",
	});
}

export default Component;
