import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw-px0b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw-px0b3f"/>`,
		"fallback": "thesvg:pterodactyl",
	});
}

export default Component;
