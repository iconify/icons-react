import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nbp6dob3g.css';
import '../../css/d/dj52i3bni.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nbp6dob3g"/><path class="dj52i3bni"/></g>`,
		"fallback": "glyphs:pause-outline",
	});
}

export default Component;
