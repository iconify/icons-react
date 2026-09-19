import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ra6t56b6o.css';
import '../../css/a/aaf5oacpj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ra6t56b6o"/><path class="aaf5oacpj"/></g>`,
		"fallback": "pepicons:no-entry",
	});
}

export default Component;
