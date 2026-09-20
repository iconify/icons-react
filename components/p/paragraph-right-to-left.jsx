import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwuzo1b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwuzo1b4x"/>`,
		"fallback": "streamline-sharp:paragraph-right-to-left",
	});
}

export default Component;
