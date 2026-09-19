import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6gsu_bib.css';
import '../../css/h/hn50n_brq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6gsu_bib"/><path class="hn50n_brq"/>`,
		"fallback": "ion:shapes-sharp",
	});
}

export default Component;
