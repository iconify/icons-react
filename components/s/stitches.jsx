import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6sttnbmu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6sttnbmu"/>`,
		"fallback": "file-icons:stitches",
	});
}

export default Component;
