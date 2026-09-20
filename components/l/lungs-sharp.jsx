import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7erv32_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7erv32_g"/>`,
		"fallback": "keyline-icons:lungs-sharp",
	});
}

export default Component;
