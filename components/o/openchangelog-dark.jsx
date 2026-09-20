import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdnovq2fm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdnovq2fm"/>`,
		"fallback": "selfhst:openchangelog-dark",
	});
}

export default Component;
