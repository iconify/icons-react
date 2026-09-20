import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz9hq19to.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz9hq19to"/>`,
		"fallback": "proicons:split-vertical",
	});
}

export default Component;
