import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_inv4bnz.css';
import '../../css/x/xej_6xgaa.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_inv4bnz"/><path class="xej_6xgaa"/>`,
		"fallback": "devicon:npm",
	});
}

export default Component;
