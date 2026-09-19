import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqqcwzbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqqcwzbik"/>`,
		"fallback": "flowbite:outgoing-call-outline",
	});
}

export default Component;
