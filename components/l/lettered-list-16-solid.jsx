import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr102vbje.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr102vbje"/>`,
		"fallback": "sidekickicons:lettered-list-16-solid",
	});
}

export default Component;
