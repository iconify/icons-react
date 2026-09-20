import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd3rb99cx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd3rb99cx"/>`,
		"fallback": "pinhead:steam-train-with-smiling-face-with-tires",
	});
}

export default Component;
