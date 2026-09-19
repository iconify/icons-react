import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_fpo-b8i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_fpo-b8i"/>`,
		"fallback": "dinkie-icons:round-pushpin-small-filled",
	});
}

export default Component;
