import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzm7f0b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzm7f0b2s"/>`,
		"fallback": "simple-icons:themodelsresource",
	});
}

export default Component;
