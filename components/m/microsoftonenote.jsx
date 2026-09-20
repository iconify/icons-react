import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feyhq7vpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feyhq7vpl"/>`,
		"fallback": "simple-icons:microsoftonenote",
	});
}

export default Component;
