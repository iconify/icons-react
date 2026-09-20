import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9aa4q98x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9aa4q98x"/>`,
		"fallback": "selfhst:rancher-desktop-dark",
	});
}

export default Component;
