import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd8gyrktq.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd8gyrktq"/>`,
		"fallback": "fa-solid:user-cog",
	});
}

export default Component;
