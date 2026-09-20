import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh_buwbzw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh_buwbzw"/>`,
		"fallback": "oui:nav-query-sets",
	});
}

export default Component;
