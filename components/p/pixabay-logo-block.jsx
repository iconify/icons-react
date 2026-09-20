import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxxxt8_4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gxxxt8_4r"/>`,
		"fallback": "streamline-logos:pixabay-logo-block",
	});
}

export default Component;
