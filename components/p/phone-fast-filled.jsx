import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-s69c4hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-s69c4hn"/>`,
		"fallback": "griddy-icons:phone-fast-filled",
	});
}

export default Component;
