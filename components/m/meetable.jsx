import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph5l2_t_x.css';
import '../../css/i/i70tju1pk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph5l2_t_x"/><path class="i70tju1pk"/>`,
		"fallback": "selfhst:meetable",
	});
}

export default Component;
