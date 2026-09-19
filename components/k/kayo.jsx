import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwe_a9b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwe_a9b_b"/>`,
		"fallback": "cbi:kayo",
	});
}

export default Component;
