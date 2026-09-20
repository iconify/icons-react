import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugquq8b_b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugquq8b_b"/>`,
		"fallback": "pinhead:plug-with-bolt",
	});
}

export default Component;
