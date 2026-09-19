import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsioksb0y.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsioksb0y"/>`,
		"fallback": "dinkie-icons:leafy-green",
	});
}

export default Component;
