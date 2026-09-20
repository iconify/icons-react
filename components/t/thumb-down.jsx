import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al7f0nbvz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al7f0nbvz"/>`,
		"fallback": "ix:thumb-down",
	});
}

export default Component;
