import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d__9kbylk.css';
import '../../css/u/uolzbmrxs.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kzsrsccfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGZg2WPbqn" class="d__9kbylk"/><path id="SVGFXsCmRkG" class="uolzbmrxs"/></defs><mask id="SVG2elAudDJ" class="ft5dv1b6b"><use href="#SVGZg2WPbqn"/><use href="#SVGFXsCmRkG" clip-rule="evenodd" class="d2kvgvbvc"/></mask><g class="cuyn6tgcc"><use href="#SVGZg2WPbqn"/><use href="#SVGFXsCmRkG" clip-rule="evenodd" class="d2kvgvbvc"/><path mask="url(#SVG2elAudDJ)" class="kzsrsccfe"/></g>`,
		"fallback": "healthicons:medicines-24px",
	});
}

export default Component;
