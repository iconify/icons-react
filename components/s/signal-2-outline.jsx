import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w0r2pkbzw.css';
import '../../css/h/hpnz24bmr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w0r2pkbzw"/><path class="hpnz24bmr"/></g>`,
		"fallback": "glyphs:signal-2-outline",
	});
}

export default Component;
