import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoz23tbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoz23tbxc"/>`,
		"fallback": "noviair-light:smile-heart",
	});
}

export default Component;
