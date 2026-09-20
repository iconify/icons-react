import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t0jj9rbth.css';
import '../../css/f/fjxiq25kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t0jj9rbth"/><path class="fjxiq25kt"/></g>`,
		"fallback": "keyline-icons:rocket-duotone",
	});
}

export default Component;
