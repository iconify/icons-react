import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8aqjnb2a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8aqjnb2a"/>`,
		"fallback": "devicon-plain:vlang",
	});
}

export default Component;
