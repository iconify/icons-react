import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjtrot2-f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjtrot2-f"/>`,
		"fallback": "oui:sort-right",
	});
}

export default Component;
