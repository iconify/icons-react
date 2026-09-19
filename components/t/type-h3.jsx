import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apie_-4pn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apie_-4pn"/>`,
		"fallback": "bi:type-h3",
	});
}

export default Component;
