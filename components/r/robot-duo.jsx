import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdgd1mbja.css';
import '../../css/m/m39p55xqg.css';
import '../../css/e/e5k6yebuc.css';
import '../../css/g/gexw8i-wt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rdgd1mbja"/><path class="m39p55xqg"/><path class="e5k6yebuc"/><path class="gexw8i-wt"/></g>`,
		"fallback": "glyphs:robot-duo",
	});
}

export default Component;
