import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7d6iacxt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7d6iacxt"/>`,
		"fallback": "dinkie-icons:no-one-under-eighteen-symbol",
	});
}

export default Component;
