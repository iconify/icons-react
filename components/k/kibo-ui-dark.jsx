import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngpo3ddrb.css';

const viewBox = {"width":117,"height":116};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ngpo3ddrb"/>`,
		"fallback": "thesvg-color:kibo-ui-dark",
	});
}

export default Component;
