import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb5220baq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb5220baq"/>`,
		"fallback": "nimbus:sticky-note",
	});
}

export default Component;
