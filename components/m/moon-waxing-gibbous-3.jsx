import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih0mf8ell.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih0mf8ell"/>`,
		"fallback": "wi:moon-waxing-gibbous-3",
	});
}

export default Component;
