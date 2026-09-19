import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzr7y9y0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzr7y9y0k"/>`,
		"fallback": "griddy-icons:moon-alt-filled",
	});
}

export default Component;
