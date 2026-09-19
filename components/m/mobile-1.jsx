import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4adrdbbc.css';
import '../../css/w/wpr94kbcg.css';
import '../../css/o/o278vf_zl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="n4adrdbbc"/><path class="wpr94kbcg"/><path class="o278vf_zl"/></g>`,
		"fallback": "glyphs-poly:mobile-1",
	});
}

export default Component;
