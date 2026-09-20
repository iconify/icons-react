import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paf7zpi5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paf7zpi5x"/>`,
		"fallback": "simple-icons:ssrn",
	});
}

export default Component;
