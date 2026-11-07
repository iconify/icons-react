import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht2yptqqj.css';
import '../../css/j/j5ldtz0xa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht2yptqqj"/><path clip-rule="evenodd" class="j5ldtz0xa"/>`,
		"fallback": "solar:lightbulb-minimalistic-bold-duotone",
	});
}

export default Component;
