import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm302v34r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nm302v34r"/>`,
		"fallback": "ix:key",
	});
}

export default Component;
