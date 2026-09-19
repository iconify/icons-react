import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhmj4mblq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhmj4mblq"/>`,
		"fallback": "bi:shield-fill-minus",
	});
}

export default Component;
