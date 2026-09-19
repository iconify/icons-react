import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0y6dt08n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s0y6dt08n"/>`,
		"fallback": "griddy-icons:monkey-filled",
	});
}

export default Component;
