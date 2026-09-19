import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qd4_61bdr.css';
import '../../css/n/ny0-f6z0o.css';
import '../../css/g/gmkyp99tb.css';
import '../../css/a/agc8y1l_a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qd4_61bdr"/><path class="ny0-f6z0o"/><path class="gmkyp99tb"/><path class="agc8y1l_a"/></g>`,
		"fallback": "glyphs:subway-outline",
	});
}

export default Component;
