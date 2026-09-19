import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv8vgf7uy.css';

const viewBox = {"width":371,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv8vgf7uy"/>`,
		"fallback": "file-icons:pov-ray",
	});
}

export default Component;
