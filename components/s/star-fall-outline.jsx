import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i5laycure.css';
import '../../css/v/vbb7arbqa.css';
import '../../css/r/rpp9mmqxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i5laycure"/><path class="vbb7arbqa"/><path class="rpp9mmqxo"/></g>`,
		"fallback": "solar:star-fall-outline",
	});
}

export default Component;
