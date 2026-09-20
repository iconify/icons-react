import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuapj8bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuapj8bbv"/>`,
		"fallback": "simple-icons:tsnode",
	});
}

export default Component;
