import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy9jcwcfv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy9jcwcfv"/>`,
		"fallback": "oui:star-minus-filled",
	});
}

export default Component;
