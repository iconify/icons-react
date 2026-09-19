import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8rdw4bir.css';
import '../../css/k/kzym1ogmg.css';
import '../../css/r/rn_p5ms7h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u8rdw4bir"/><rect class="kzym1ogmg"/><path clip-rule="evenodd" class="rn_p5ms7h"/></g>`,
		"fallback": "glyphs-poly:watch-fitness",
	});
}

export default Component;
