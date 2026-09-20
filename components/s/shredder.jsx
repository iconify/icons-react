import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmzp1ubns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmzp1ubns"/>`,
		"fallback": "tabler:shredder",
	});
}

export default Component;
