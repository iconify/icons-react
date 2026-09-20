import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs74ptb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs74ptb3u"/>`,
		"fallback": "keyline-icons:more-horizontal-duotone",
	});
}

export default Component;
