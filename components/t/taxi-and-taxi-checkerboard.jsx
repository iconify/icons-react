import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm515tbse.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm515tbse"/>`,
		"fallback": "pinhead:taxi-and-taxi-checkerboard",
	});
}

export default Component;
