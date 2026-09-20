import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk3br8gfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk3br8gfw"/>`,
		"fallback": "selfhst:unraid-dark",
	});
}

export default Component;
