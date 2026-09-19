import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxewg8z1p.css';
import '../../css/t/t08ue7k0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxewg8z1p"/><path class="t08ue7k0c"/>`,
		"fallback": "fontisto:travis",
	});
}

export default Component;
