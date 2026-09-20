import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsh3j-hwo.css';
import '../../css/o/oxl9k8wxn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsh3j-hwo"/><path class="oxl9k8wxn"/>`,
		"fallback": "selfhst:lumio",
	});
}

export default Component;
