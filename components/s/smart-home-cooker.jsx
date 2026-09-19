import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eoqhq0b_t.css';
import '../../css/c/c9fxog1ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eoqhq0b_t"/><path class="c9fxog1ta"/></g>`,
		"fallback": "gg:smart-home-cooker",
	});
}

export default Component;
