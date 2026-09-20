import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2v24ccdv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2v24ccdv"/>`,
		"fallback": "oui:table-density-compact",
	});
}

export default Component;
