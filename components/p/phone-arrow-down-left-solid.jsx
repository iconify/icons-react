import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ihm4rgkry.css';
import '../../css/q/qiq5x8bmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ihm4rgkry"/><path class="qiq5x8bmu"/></g>`,
		"fallback": "heroicons:phone-arrow-down-left-solid",
	});
}

export default Component;
