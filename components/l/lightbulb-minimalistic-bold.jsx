import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucgsi_b-h.css';
import '../../css/l/l35tfkbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ucgsi_b-h"/><path class="l35tfkbsr"/>`,
		"fallback": "solar:lightbulb-minimalistic-bold",
	});
}

export default Component;
