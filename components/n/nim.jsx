import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5bnq-jir.css';
import '../../css/j/j1uc_7b3b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5bnq-jir"/><path class="j1uc_7b3b"/>`,
		"fallback": "devicon:nim",
	});
}

export default Component;
