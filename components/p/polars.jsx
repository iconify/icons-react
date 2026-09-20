import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mk6tkrvjp.css';
import '../../css/z/znnjzyb9r.css';
import '../../css/e/ecj60bbth.css';

const viewBox = {"width":181,"height":91};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGZKo1abnF)" clip-rule="evenodd" class="mk6tkrvjp"/><path fill="url(#SVGZKo1abnF)" clip-rule="evenodd" class="mk6tkrvjp"/><defs><radialGradient id="SVGZKo1abnF" cx="0" cy="0" r="1" gradientTransform="rotate(157.043 75.279 25.938)scale(182.056 371.547)" gradientUnits="userSpaceOnUse"><stop class="znnjzyb9r"/><stop offset="1" class="ecj60bbth"/></radialGradient></defs></g>`,
		"fallback": "thesvg-color:polars",
	});
}

export default Component;
