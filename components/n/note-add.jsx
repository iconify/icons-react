import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsh1rl1iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsh1rl1iw"/>`,
		"fallback": "hugeicons:note-add",
	});
}

export default Component;
