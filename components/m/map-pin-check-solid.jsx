import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh0755-mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh0755-mp"/>`,
		"fallback": "withicons:map-pin-check-solid",
	});
}

export default Component;
