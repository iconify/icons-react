import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh8b90bkl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh8b90bkl"/>`,
		"fallback": "selfhst:sonobarr-light",
	});
}

export default Component;
