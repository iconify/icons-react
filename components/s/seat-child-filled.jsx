import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj0feoo2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aj0feoo2z"/>`,
		"fallback": "griddy-icons:seat-child-filled",
	});
}

export default Component;
