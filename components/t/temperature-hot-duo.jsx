import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eplcf-iln.css';
import '../../css/v/vlm9pz21l.css';
import '../../css/d/d1b_fg1ku.css';
import '../../css/w/wmvfu1bsb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eplcf-iln"/><path class="vlm9pz21l"/><path class="d1b_fg1ku"/><path class="wmvfu1bsb"/></g>`,
		"fallback": "glyphs:temperature-hot-duo",
	});
}

export default Component;
