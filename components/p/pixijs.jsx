import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6wgt-bjq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6wgt-bjq"/>`,
		"fallback": "devicon-plain:pixijs",
	});
}

export default Component;
