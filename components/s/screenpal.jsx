import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmuw75duc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmuw75duc"/>`,
		"fallback": "fa6-brands:screenpal",
	});
}

export default Component;
