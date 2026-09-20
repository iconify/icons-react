import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdp-74bup.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mdp-74bup"/>`,
		"fallback": "streamline:threat-browser-1-remix",
	});
}

export default Component;
