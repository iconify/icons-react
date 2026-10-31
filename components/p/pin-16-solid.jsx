import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv3i7l7nl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tv3i7l7nl"/>`,
		"fallback": "sidekickicons:pin-16-solid",
	});
}

export default Component;
