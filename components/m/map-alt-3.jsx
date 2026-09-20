import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoduyz_9r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uoduyz_9r"/>`,
		"fallback": "ix:map-alt-3",
	});
}

export default Component;
