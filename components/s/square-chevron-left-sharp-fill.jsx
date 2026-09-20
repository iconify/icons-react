import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfv91usyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfv91usyq"/>`,
		"fallback": "keyline-icons:square-chevron-left-sharp-fill",
	});
}

export default Component;
