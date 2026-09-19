import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npvpxe_he.css';
import '../../css/e/e7idfvbox.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npvpxe_he"/><path class="e7idfvbox"/>`,
		"fallback": "ion:logo-react-outline",
	});
}

export default Component;
