import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsd-8qpvz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fsd-8qpvz"/>`,
		"fallback": "ix:rack-ipc-success",
	});
}

export default Component;
