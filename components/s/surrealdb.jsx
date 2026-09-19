import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8lnf7b_p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8lnf7b_p"/>`,
		"fallback": "devicon-plain:surrealdb",
	});
}

export default Component;
