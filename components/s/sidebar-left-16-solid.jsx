import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epd4lwbvd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epd4lwbvd"/>`,
		"fallback": "sidekickicons:sidebar-left-16-solid",
	});
}

export default Component;
