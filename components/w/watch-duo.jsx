import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atmck8b3k.css';
import '../../css/l/lqtbpobii.css';
import '../../css/b/b3sasddpo.css';
import '../../css/k/kdz2ny_0g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="atmck8b3k"/><path class="lqtbpobii"/><path class="b3sasddpo"/><path class="kdz2ny_0g"/></g>`,
		"fallback": "glyphs:watch-duo",
	});
}

export default Component;
