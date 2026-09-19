import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc02dkb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gc02dkb-n"/>`,
		"fallback": "griddy-icons:lightbulb-on-filled",
	});
}

export default Component;
