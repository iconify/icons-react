import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c48_sfsxt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c48_sfsxt"/>`,
		"fallback": "selfhst:pyshelf-dark",
	});
}

export default Component;
