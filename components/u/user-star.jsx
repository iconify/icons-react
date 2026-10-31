import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oec_3andr.css';
import '../../css/m/mwongenbb.css';
import '../../css/u/upo0rhbsd.css';
import '../../css/i/imragy4sp.css';
import '../../css/p/phix8pbtg.css';
import '../../css/b/bn2h3mxer.css';
import '../../css/s/snkxhwbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oec_3andr wm-shadow"/><path class="mwongenbb"/><path class="upo0rhbsd"/><path class="imragy4sp"/><path class="phix8pbtg"/><path class="bn2h3mxer wm-s"/><path class="snkxhwbhb"/></g>`,
		"fallback": "withicons-retro:user-star",
	});
}

export default Component;
