import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/syj71obyf.css';
import '../../css/u/u686yscik.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="syj71obyf"/><path class="u686yscik"/></g>`,
		"fallback": "glyphs:quote-outline",
	});
}

export default Component;
