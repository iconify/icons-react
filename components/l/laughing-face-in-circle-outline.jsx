import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayo-8cbjs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayo-8cbjs"/>`,
		"fallback": "pinhead:laughing-face-in-circle-outline",
	});
}

export default Component;
