import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxkkglg1b.css';
import '../../css/n/n32zpyb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxkkglg1b"/><path clip-rule="evenodd" class="n32zpyb_v"/>`,
		"fallback": "solar:sim-cards-bold",
	});
}

export default Component;
