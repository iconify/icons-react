import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmgse00vo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmgse00vo"/>`,
		"fallback": "devicon-plain:powerbi",
	});
}

export default Component;
