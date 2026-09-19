import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2r977bff.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2r977bff"/>`,
		"fallback": "devicon-plain:passport",
	});
}

export default Component;
