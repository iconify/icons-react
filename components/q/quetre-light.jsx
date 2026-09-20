import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07t8qblp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p07t8qblp"/>`,
		"fallback": "selfhst:quetre-light",
	});
}

export default Component;
