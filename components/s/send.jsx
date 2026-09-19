import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4i9bz7fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4i9bz7fi"/>`,
		"fallback": "grommet-icons:send",
	});
}

export default Component;
