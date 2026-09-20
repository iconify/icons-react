import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzf09n3ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzf09n3ic"/>`,
		"fallback": "simple-icons:neon",
	});
}

export default Component;
