import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdz95qyas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdz95qyas primary"/>`,
		"fallback": "iconaut:signal-duotone",
	});
}

export default Component;
