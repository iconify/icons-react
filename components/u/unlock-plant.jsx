import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln9yij2wi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ln9yij2wi"/>`,
		"fallback": "ix:unlock-plant",
	});
}

export default Component;
