import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emuy9lbcg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emuy9lbcg"/>`,
		"fallback": "devicon-plain:slack",
	});
}

export default Component;
