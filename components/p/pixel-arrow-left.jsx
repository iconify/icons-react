import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m50n4vfob.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m50n4vfob"/>`,
		"fallback": "pinhead:pixel-arrow-left",
	});
}

export default Component;
