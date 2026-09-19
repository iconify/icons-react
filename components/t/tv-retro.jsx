import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me6dbccby.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="me6dbccby"/>`,
		"fallback": "gravity-ui:tv-retro",
	});
}

export default Component;
