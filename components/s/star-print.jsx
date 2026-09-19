import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g1a9t-1vi.css';
import '../../css/a/akaq1f90s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g1a9t-1vi"/><path class="akaq1f90s"/></g>`,
		"fallback": "pepicons:star-print",
	});
}

export default Component;
