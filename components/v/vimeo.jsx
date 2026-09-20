import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_wgvebfg.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_wgvebfg"/>`,
		"fallback": "jam:vimeo",
	});
}

export default Component;
