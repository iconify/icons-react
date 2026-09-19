import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik16rebhe.css';
import '../../css/e/ekcn2ur9m.css';
import '../../css/i/i_cqwtblo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik16rebhe"/><path class="ekcn2ur9m"/><path class="i_cqwtblo"/>`,
		"fallback": "devicon:streamlit",
	});
}

export default Component;
