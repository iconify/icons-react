import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/suzuvqbwa.css';
import '../../css/g/g_y-a9bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="suzuvqbwa"/><path class="g_y-a9bgh"/></g>`,
		"fallback": "solar:notebook-minimalistic-broken",
	});
}

export default Component;
