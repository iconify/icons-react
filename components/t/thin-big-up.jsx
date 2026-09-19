import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsgueum6n.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#ciThinBigUp0)"><path class="bsgueum6n"/></g><defs><clipPath id="ciThinBigUp0"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "ci:thin-big-up",
	});
}

export default Component;
