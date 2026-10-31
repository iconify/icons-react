import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u414_bccf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u414_bccf"/>`,
		"fallback": "sidekickicons:keyboard-16-solid",
	});
}

export default Component;
