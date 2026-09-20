import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-e2ufb-v.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-e2ufb-v"/>`,
		"fallback": "jam:volume-mute-square",
	});
}

export default Component;
