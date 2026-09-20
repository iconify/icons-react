import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxxo6lb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dxxo6lb9u"/>`,
		"fallback": "streamline-sharp:magnifying-glass-remix",
	});
}

export default Component;
