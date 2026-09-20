import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhv8_vmwf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhv8_vmwf"/>`,
		"fallback": "qlementine-icons:resize-smaller-16",
	});
}

export default Component;
