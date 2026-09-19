import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_nf0ib1w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_nf0ib1w"/>`,
		"fallback": "garden:megaphone-fill-16",
	});
}

export default Component;
