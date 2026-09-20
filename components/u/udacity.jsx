import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aguem8bfp.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aguem8bfp"/>`,
		"fallback": "thesvg-color:udacity",
	});
}

export default Component;
