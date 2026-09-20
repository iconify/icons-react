import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eusr_9bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eusr_9bsu"/>`,
		"fallback": "keyline-icons:panels-left-bottom-sharp",
	});
}

export default Component;
