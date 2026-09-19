import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boimr8fff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="boimr8fff"/>`,
		"fallback": "griddy-icons:tooth-clean-filled",
	});
}

export default Component;
