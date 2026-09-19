import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6xl8jcra.css';
import '../../css/j/j4mmol5hv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b6xl8jcra"/><path class="j4mmol5hv"/></g>`,
		"fallback": "glyphs:lock-open-1-duo",
	});
}

export default Component;
