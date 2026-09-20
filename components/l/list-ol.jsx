import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwivker6d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwivker6d"/>`,
		"fallback": "vaadin:list-ol",
	});
}

export default Component;
