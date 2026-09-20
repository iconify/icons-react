import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-9a9geg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to-9a9geg"/>`,
		"fallback": "simple-icons:quip",
	});
}

export default Component;
