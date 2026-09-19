import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul2b2fgxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul2b2fgxs"/>`,
		"fallback": "guidance:trailer-sites",
	});
}

export default Component;
