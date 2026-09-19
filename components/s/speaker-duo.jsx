import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ltljcf2vz.css';
import '../../css/f/f3e-lmbjz.css';
import '../../css/f/f_z9owuao.css';
import '../../css/e/ecephejqz.css';
import '../../css/r/rdq7w4a0p.css';
import '../../css/t/tzkz-zitu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ltljcf2vz"/><path clip-rule="evenodd" class="f3e-lmbjz"/><path class="f_z9owuao"/><path class="ecephejqz"/><path clip-rule="evenodd" class="rdq7w4a0p"/><path class="tzkz-zitu"/></g>`,
		"fallback": "glyphs:speaker-duo",
	});
}

export default Component;
