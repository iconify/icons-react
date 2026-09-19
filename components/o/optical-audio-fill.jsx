import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fqc2h_b3p.css';
import '../../css/w/wdxg_5b4w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fqc2h_b3p"/><path class="wdxg_5b4w"/></g>`,
		"fallback": "bi:optical-audio-fill",
	});
}

export default Component;
