import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeehi_bkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeehi_bkg"/>`,
		"fallback": "iconoir:plug-type-l",
	});
}

export default Component;
