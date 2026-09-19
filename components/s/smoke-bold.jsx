import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z10qtpnpq.css';
import '../../css/a/alr-4c-fm.css';
import '../../css/b/besnr4x3o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z10qtpnpq"/><path class="alr-4c-fm"/><path class="besnr4x3o"/></g>`,
		"fallback": "glyphs:smoke-bold",
	});
}

export default Component;
