import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-sti_bko.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-sti_bko"/>`,
		"fallback": "dinkie-icons:microphone-filled",
	});
}

export default Component;
