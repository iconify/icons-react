import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcxsgkb4a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcxsgkb4a"/>`,
		"fallback": "oui:page-select",
	});
}

export default Component;
