import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2v5x-bzn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2v5x-bzn"/>`,
		"fallback": "dinkie-icons:radio-button-small",
	});
}

export default Component;
