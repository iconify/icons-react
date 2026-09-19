import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evlh4v6mo.css';
import '../../css/i/ixwphl9ao.css';
import '../../css/l/l4-wf0bph.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="evlh4v6mo"/><path class="ixwphl9ao"/><path class="l4-wf0bph"/></g>`,
		"fallback": "fluent-emoji-flat:pill",
	});
}

export default Component;
