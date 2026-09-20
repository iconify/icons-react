import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_ftkyb5l.css';
import '../../css/y/yerqhxb3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_ftkyb5l"/><path class="yerqhxb3z"/>`,
		"fallback": "selfhst:quickbars-dark",
	});
}

export default Component;
