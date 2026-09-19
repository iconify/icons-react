import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgdc1bbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgdc1bbie"/>`,
		"fallback": "bxs:megaphone",
	});
}

export default Component;
