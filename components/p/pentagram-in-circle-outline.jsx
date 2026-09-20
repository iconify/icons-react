import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2nzhhb7j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2nzhhb7j"/>`,
		"fallback": "pinhead:pentagram-in-circle-outline",
	});
}

export default Component;
