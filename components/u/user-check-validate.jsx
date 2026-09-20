import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk-trub3u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk-trub3u"/>`,
		"fallback": "streamline:user-check-validate",
	});
}

export default Component;
