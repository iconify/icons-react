import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd9pz999j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd9pz999j primary"/>`,
		"fallback": "iconaut:person-standing-duotone",
	});
}

export default Component;
