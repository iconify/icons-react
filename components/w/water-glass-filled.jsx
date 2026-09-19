import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udet_s4_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="udet_s4_p"/>`,
		"fallback": "griddy-icons:water-glass-filled",
	});
}

export default Component;
