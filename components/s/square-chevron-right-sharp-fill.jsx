import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geki3y6gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geki3y6gf"/>`,
		"fallback": "keyline-icons:square-chevron-right-sharp-fill",
	});
}

export default Component;
