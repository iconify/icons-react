import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7pph2bsi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7pph2bsi"/>`,
		"fallback": "oui:token-constant",
	});
}

export default Component;
