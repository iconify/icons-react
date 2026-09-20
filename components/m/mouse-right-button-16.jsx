import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2apqubdg.css';
import '../../css/o/oj1zdwuco.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d2apqubdg"/><path class="oj1zdwuco"/>`,
		"fallback": "qlementine-icons:mouse-right-button-16",
	});
}

export default Component;
