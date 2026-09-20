import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eefgus66b.css';
import '../../css/e/etgyz5bij.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eefgus66b"/><path class="etgyz5bij"/></g>`,
		"fallback": "pepicons-print:triangle-left-filled",
	});
}

export default Component;
