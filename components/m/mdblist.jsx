import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly0lefola.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly0lefola"/>`,
		"fallback": "simple-icons:mdblist",
	});
}

export default Component;
