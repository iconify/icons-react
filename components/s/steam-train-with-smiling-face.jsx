import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyl5n_bpu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyl5n_bpu"/>`,
		"fallback": "pinhead:steam-train-with-smiling-face",
	});
}

export default Component;
