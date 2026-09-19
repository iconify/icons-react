import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o16ffbc_p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o16ffbc_p"/>`,
		"fallback": "dinkie-icons:left-hook-arrow-small-filled",
	});
}

export default Component;
