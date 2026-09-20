import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzwib_bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzwib_bbj"/>`,
		"fallback": "keyline-icons:temperature-full-sharp-fill",
	});
}

export default Component;
