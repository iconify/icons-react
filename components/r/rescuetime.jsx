import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4lrzb4tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4lrzb4tv"/>`,
		"fallback": "thesvg-color:rescuetime",
	});
}

export default Component;
