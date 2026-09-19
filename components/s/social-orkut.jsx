import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f0e2grbjh.css';
import '../../css/z/z9bc0ktrv.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f0e2grbjh"/><path class="z9bc0ktrv"/></g>`,
		"fallback": "foundation:social-orkut",
	});
}

export default Component;
