import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfq_mub-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfq_mub-i"/>`,
		"fallback": "reicon:phone-off-filled",
	});
}

export default Component;
