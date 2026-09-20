import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh2xf-bha.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh2xf-bha"/>`,
		"fallback": "pinhead:triangle-down-squat",
	});
}

export default Component;
