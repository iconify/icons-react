import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz5j96neh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz5j96neh"/>`,
		"fallback": "selfhst:rocky-linux-light",
	});
}

export default Component;
