import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw644_pji.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw644_pji"/>`,
		"fallback": "vaadin:thumbs-up-o",
	});
}

export default Component;
