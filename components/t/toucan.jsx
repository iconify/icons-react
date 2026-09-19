import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe48pf9zw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe48pf9zw"/>`,
		"fallback": "game-icons:toucan",
	});
}

export default Component;
