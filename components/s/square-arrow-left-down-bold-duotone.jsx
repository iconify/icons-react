import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/madko4bbz.css';
import '../../css/f/fgkwccyip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="madko4bbz"/><path class="fgkwccyip"/>`,
		"fallback": "solar:square-arrow-left-down-bold-duotone",
	});
}

export default Component;
