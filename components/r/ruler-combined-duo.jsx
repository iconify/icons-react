import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqqj806mv.css';
import '../../css/b/b-us7aczi.css';
import '../../css/r/rkoiybc7f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nqqj806mv"/><path class="b-us7aczi"/><path class="rkoiybc7f"/></g>`,
		"fallback": "glyphs:ruler-combined-duo",
	});
}

export default Component;
