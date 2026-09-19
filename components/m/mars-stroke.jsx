import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghv-0w7ie.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghv-0w7ie"/>`,
		"fallback": "fa-solid:mars-stroke",
	});
}

export default Component;
