import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w42u_2byc.css';
import '../../css/n/nbqxwzmgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w42u_2byc"/><path class="nbqxwzmgw"/></g>`,
		"fallback": "tabler:traffic-lights-off",
	});
}

export default Component;
