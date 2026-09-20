import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjfw4_b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjfw4_b4d"/>`,
		"fallback": "uil:social-distancing",
	});
}

export default Component;
