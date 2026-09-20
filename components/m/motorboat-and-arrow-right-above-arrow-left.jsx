import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd8e2usik.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd8e2usik"/>`,
		"fallback": "pinhead:motorboat-and-arrow-right-above-arrow-left",
	});
}

export default Component;
