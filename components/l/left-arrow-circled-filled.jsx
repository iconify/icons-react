import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve2fb11kn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve2fb11kn"/>`,
		"fallback": "dinkie-icons:left-arrow-circled-filled",
	});
}

export default Component;
