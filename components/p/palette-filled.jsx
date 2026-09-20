import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9yg-6b7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9yg-6b7j"/>`,
		"fallback": "ix:palette-filled",
	});
}

export default Component;
