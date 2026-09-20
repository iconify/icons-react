import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g4_2bqjwg.css';
import '../../css/h/h6yfqac3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g4_2bqjwg"/><path class="h6yfqac3z"/></g>`,
		"fallback": "solar:trash-bin-2-outline",
	});
}

export default Component;
