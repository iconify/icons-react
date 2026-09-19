import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_zhcobuf.css';
import '../../css/i/i1irgdm2u.css';
import '../../css/g/ga7-lizjt.css';
import '../../css/j/jdzyz-dgz.css';
import '../../css/g/g5eaimb5h.css';
import '../../css/m/mlwi5fbim.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u_zhcobuf"/><path class="i1irgdm2u"/><path clip-rule="evenodd" class="ga7-lizjt"/><path class="jdzyz-dgz"/><path class="g5eaimb5h"/><path clip-rule="evenodd" class="mlwi5fbim"/></g>`,
		"fallback": "glyphs:satellite-dish-outline",
	});
}

export default Component;
