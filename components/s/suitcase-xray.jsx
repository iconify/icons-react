import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vifm8s9hx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vifm8s9hx"/>`,
		"fallback": "pinhead:suitcase-xray",
	});
}

export default Component;
