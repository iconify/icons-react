import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x38bmab_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x38bmab_a"/>`,
		"fallback": "subway:left-up-corner-arrow",
	});
}

export default Component;
