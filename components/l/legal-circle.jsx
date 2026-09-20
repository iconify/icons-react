import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4wiwml6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x4wiwml6o"/>`,
		"fallback": "ix:legal-circle",
	});
}

export default Component;
