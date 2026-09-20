import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj--fcbkg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj--fcbkg"/>`,
		"fallback": "pinhead:motorboat-under-taxi-checkerboard",
	});
}

export default Component;
