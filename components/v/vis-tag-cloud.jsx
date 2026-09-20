import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4nkhhbdn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4nkhhbdn"/>`,
		"fallback": "oui:vis-tag-cloud",
	});
}

export default Component;
