import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_g2vzb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q_g2vzb_a"/>`,
		"fallback": "token:manta-pacific",
	});
}

export default Component;
