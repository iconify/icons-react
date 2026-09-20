import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mck3r6bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mck3r6bje"/>`,
		"fallback": "simple-icons:opensuse",
	});
}

export default Component;
