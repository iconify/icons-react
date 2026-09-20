import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmw2_n2yc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmw2_n2yc"/>`,
		"fallback": "roentgen:japan-police-station",
	});
}

export default Component;
