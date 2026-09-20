import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voelf1xfy.css';
import '../../css/p/p7ctu3bns.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voelf1xfy"/><path class="p7ctu3bns"/>`,
		"fallback": "vaadin:power-off",
	});
}

export default Component;
