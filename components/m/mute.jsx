import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm69jwb7x.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm69jwb7x"/>`,
		"fallback": "picon:mute",
	});
}

export default Component;
