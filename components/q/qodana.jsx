import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvh7ehb4j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvh7ehb4j"/>`,
		"fallback": "devicon-plain:qodana",
	});
}

export default Component;
