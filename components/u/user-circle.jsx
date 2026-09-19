import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/robw075fr.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="robw075fr"/>`,
		"fallback": "fa-solid:user-circle",
	});
}

export default Component;
