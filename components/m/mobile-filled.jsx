import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eny1zqvyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eny1zqvyl"/>`,
		"fallback": "griddy-icons:mobile-filled",
	});
}

export default Component;
