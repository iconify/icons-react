import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpjx14kou.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpjx14kou"/>`,
		"fallback": "vaadin:list-ul",
	});
}

export default Component;
