import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta0hcqbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ta0hcqbss"/>`,
		"fallback": "solar:menu-dots-circle-bold",
	});
}

export default Component;
