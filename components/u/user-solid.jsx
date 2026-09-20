import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgmkf8j1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgmkf8j1b"/>`,
		"fallback": "pixel:user-solid",
	});
}

export default Component;
