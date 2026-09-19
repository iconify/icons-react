import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaq4zqbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaq4zqbue"/>`,
		"fallback": "boxicons:note-filled",
	});
}

export default Component;
