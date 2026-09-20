import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0_imlbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0_imlbhl"/>`,
		"fallback": "tabler:pointer-pause",
	});
}

export default Component;
