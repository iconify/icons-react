import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukooq9bkv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukooq9bkv"/>`,
		"fallback": "dinkie-icons:waning-crescent-moon-symbol",
	});
}

export default Component;
