import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x99r71mke.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x99r71mke"/>`,
		"fallback": "icomoon-free:mail4",
	});
}

export default Component;
