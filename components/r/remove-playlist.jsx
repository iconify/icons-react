import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msdj0ub3p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msdj0ub3p"/>`,
		"fallback": "subway:remove-playlist",
	});
}

export default Component;
