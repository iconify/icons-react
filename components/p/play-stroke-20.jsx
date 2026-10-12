import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clte_upmc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clte_upmc"/>`,
		"fallback": "garden:play-stroke-20",
	});
}

export default Component;
