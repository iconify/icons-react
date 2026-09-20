import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y87ybjbjt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y87ybjbjt"/>`,
		"fallback": "oui:table-density-expanded",
	});
}

export default Component;
