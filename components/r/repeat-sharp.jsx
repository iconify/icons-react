import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcxeqn1hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcxeqn1hy"/>`,
		"fallback": "keyline-icons:repeat-sharp",
	});
}

export default Component;
