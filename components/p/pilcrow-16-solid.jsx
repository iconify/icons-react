import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bde7xsbpa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bde7xsbpa"/>`,
		"fallback": "sidekickicons:pilcrow-16-solid",
	});
}

export default Component;
