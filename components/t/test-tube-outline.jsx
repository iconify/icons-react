import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gdtatsbfy.css';
import '../../css/j/jxm-rhb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gdtatsbfy"/><path class="jxm-rhb5j"/></g>`,
		"fallback": "solar:test-tube-outline",
	});
}

export default Component;
