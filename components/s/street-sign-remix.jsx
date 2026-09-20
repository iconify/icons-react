import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha9i3i5iw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ha9i3i5iw"/>`,
		"fallback": "streamline:street-sign-remix",
	});
}

export default Component;
