import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwp0xcbtz.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwp0xcbtz"/>`,
		"fallback": "wi:moon-alt-waxing-gibbous-5",
	});
}

export default Component;
