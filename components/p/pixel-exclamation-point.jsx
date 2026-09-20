import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou2fv_0vq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou2fv_0vq"/>`,
		"fallback": "pinhead:pixel-exclamation-point",
	});
}

export default Component;
