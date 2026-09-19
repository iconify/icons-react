import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lg6-jzvbp.css';
import '../../css/m/mc3fvym9s.css';
import '../../css/c/cpj3bqbqa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lg6-jzvbp"/><path class="mc3fvym9s"/><path class="cpj3bqbqa"/></g>`,
		"fallback": "glyphs:save-1-duo",
	});
}

export default Component;
