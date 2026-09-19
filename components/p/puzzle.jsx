import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgqtju7yc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgqtju7yc"/>`,
		"fallback": "game-icons:puzzle",
	});
}

export default Component;
