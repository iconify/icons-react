import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epyglrb4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="epyglrb4b"/>`,
		"fallback": "ix:remote-access",
	});
}

export default Component;
