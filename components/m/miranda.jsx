import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjwn39bbu.css';

const viewBox = {"width":300,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjwn39bbu"/>`,
		"fallback": "file-icons:miranda",
	});
}

export default Component;
