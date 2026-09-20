import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nge3vp00y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nge3vp00y"/>`,
		"fallback": "ix:plant-security",
	});
}

export default Component;
