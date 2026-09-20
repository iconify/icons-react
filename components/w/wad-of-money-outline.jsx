import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u993nlo2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u993nlo2a"/>`,
		"fallback": "solar:wad-of-money-outline",
	});
}

export default Component;
