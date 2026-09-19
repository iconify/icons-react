import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m59-vibre.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m59-vibre"/>`,
		"fallback": "dinkie-icons:uni8349-circled",
	});
}

export default Component;
