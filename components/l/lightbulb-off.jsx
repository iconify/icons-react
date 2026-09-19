import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8pt4eu3o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8pt4eu3o"/>`,
		"fallback": "bi:lightbulb-off",
	});
}

export default Component;
