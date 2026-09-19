import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw9q7j9hb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw9q7j9hb"/>`,
		"fallback": "bi:table",
	});
}

export default Component;
