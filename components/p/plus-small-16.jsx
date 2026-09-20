import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hozw9riwr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hozw9riwr"/>`,
		"fallback": "qlementine-icons:plus-small-16",
	});
}

export default Component;
