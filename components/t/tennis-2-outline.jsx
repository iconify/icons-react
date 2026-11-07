import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/ppl5-68oh.css';
import '../../css/r/r-px51bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ppl5-68oh"/><path class="r-px51bnc"/></g>`,
		"fallback": "solar:tennis-2-outline",
	});
}

export default Component;
