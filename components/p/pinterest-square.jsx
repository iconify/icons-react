import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlsx0d_2w.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlsx0d_2w"/>`,
		"fallback": "fa:pinterest-square",
	});
}

export default Component;
