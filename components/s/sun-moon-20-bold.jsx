import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv99k2h7c.css';
import '../../css/v/vz-j8jb4e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv99k2h7c"/><path class="vz-j8jb4e"/>`,
		"fallback": "energy-icons:sun-moon-20-bold",
	});
}

export default Component;
