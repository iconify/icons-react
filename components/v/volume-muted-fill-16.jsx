import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u70yb2bre.css';
import '../../css/i/i95u-8bjy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u70yb2bre"/><path class="i95u-8bjy"/>`,
		"fallback": "garden:volume-muted-fill-16",
	});
}

export default Component;
