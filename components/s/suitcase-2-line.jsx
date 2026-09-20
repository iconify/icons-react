import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul4-oqb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul4-oqb2l"/>`,
		"fallback": "majesticons:suitcase-2-line",
	});
}

export default Component;
