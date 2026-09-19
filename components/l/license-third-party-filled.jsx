import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o27766bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o27766bdx"/>`,
		"fallback": "griddy-icons:license-third-party-filled",
	});
}

export default Component;
