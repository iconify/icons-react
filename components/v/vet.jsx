import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sc8ovm3nh.css';
import '../../css/u/u3xn--d-x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="sc8ovm3nh"/><path class="u3xn--d-x"/></g>`,
		"fallback": "cryptocurrency-color:vet",
	});
}

export default Component;
