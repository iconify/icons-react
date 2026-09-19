import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fr9swbb_n.css';
import '../../css/k/kseq5bp-d.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fr9swbb_n"/><path class="kseq5bp-d"/></g>`,
		"fallback": "si-glyph:mark-snorker",
	});
}

export default Component;
