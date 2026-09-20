import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia5v6ebka.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ia5v6ebka"/>`,
		"fallback": "streamline-flex:megaphone-1-solid",
	});
}

export default Component;
