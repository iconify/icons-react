import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urra7zbtu.css';
import '../../css/w/wcoui61up.css';
import '../../css/e/ei46kjzmg.css';
import '../../css/k/kgsfw5daa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="urra7zbtu"/><path clip-rule="evenodd" class="wcoui61up"/><path class="ei46kjzmg"/><path class="kgsfw5daa"/></g>`,
		"fallback": "glyphs-poly:shoe-print",
	});
}

export default Component;
