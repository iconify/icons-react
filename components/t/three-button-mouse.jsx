import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj0cu-bml.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj0cu-bml"/>`,
		"fallback": "dinkie-icons:three-button-mouse",
	});
}

export default Component;
