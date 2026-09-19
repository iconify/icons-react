import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx_sllbvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx_sllbvu"/>`,
		"fallback": "ion:ios-egg",
	});
}

export default Component;
