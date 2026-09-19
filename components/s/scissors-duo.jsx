import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zttmhdm7h.css';
import '../../css/f/fll8gje-k.css';
import '../../css/c/cwwt87b2f.css';
import '../../css/s/s6k4l3b-m.css';
import '../../css/k/kxu8vjbib.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zttmhdm7h"/><path class="fll8gje-k"/><path clip-rule="evenodd" class="cwwt87b2f"/><path class="s6k4l3b-m"/><path class="kxu8vjbib"/></g>`,
		"fallback": "glyphs:scissors-duo",
	});
}

export default Component;
