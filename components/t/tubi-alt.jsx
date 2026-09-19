import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk4aipm_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk4aipm_b"/>`,
		"fallback": "cbi:tubi-alt",
	});
}

export default Component;
