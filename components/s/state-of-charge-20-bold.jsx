import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7wk2b5mb.css';
import '../../css/c/cbu4-sqbs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7wk2b5mb"/><path class="cbu4-sqbs"/>`,
		"fallback": "energy-icons:state-of-charge-20-bold",
	});
}

export default Component;
