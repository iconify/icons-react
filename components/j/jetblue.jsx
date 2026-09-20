import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f67q75bzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f67q75bzs"/>`,
		"fallback": "simple-icons:jetblue",
	});
}

export default Component;
