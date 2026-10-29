import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m44belb7b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m44belb7b"/>`,
		"fallback": "devicon-plain:plsql",
	});
}

export default Component;
