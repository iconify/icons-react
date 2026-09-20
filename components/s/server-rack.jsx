import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lze0hacgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lze0hacgo"/>`,
		"fallback": "ix:server-rack",
	});
}

export default Component;
