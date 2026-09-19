import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2sf9e_hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2sf9e_hk"/>`,
		"fallback": "fe:open-mouth",
	});
}

export default Component;
