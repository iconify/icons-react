import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7yc6nbet.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7yc6nbet"/>`,
		"fallback": "ps:playstation",
	});
}

export default Component;
