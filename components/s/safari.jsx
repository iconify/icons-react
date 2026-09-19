import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhwn_b2xm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhwn_b2xm"/>`,
		"fallback": "devicon-plain:safari",
	});
}

export default Component;
