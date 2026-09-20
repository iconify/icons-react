import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q02zdvp7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q02zdvp7u"/>`,
		"fallback": "thesvg-color:niconico",
	});
}

export default Component;
