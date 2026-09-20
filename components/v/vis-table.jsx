import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hidr92b8v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hidr92b8v"/>`,
		"fallback": "oui:vis-table",
	});
}

export default Component;
