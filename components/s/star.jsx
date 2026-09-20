import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h50m28b6p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h50m28b6p"/>`,
		"fallback": "pajamas:star",
	});
}

export default Component;
