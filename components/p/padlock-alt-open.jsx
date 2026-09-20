import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt7bpi-vr.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt7bpi-vr"/>`,
		"fallback": "jam:padlock-alt-open",
	});
}

export default Component;
