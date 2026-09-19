import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzn16g15g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzn16g15g"/>`,
		"fallback": "devicon-plain:visualstudio",
	});
}

export default Component;
