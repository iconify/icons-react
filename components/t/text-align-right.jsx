import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf_byub7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf_byub7w"/>`,
		"fallback": "pixelarticons:text-align-right",
	});
}

export default Component;
