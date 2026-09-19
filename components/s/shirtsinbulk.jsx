import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fof-50bed.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fof-50bed"/>`,
		"fallback": "fa7-brands:shirtsinbulk",
	});
}

export default Component;
