import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2g6lqbdb.css';
import '../../css/f/fnwhem6it.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2g6lqbdb"/><path class="fnwhem6it"/>`,
		"fallback": "solar:notes-minimalistic-bold-duotone",
	});
}

export default Component;
