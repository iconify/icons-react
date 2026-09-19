import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7aszsb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7aszsb3r"/>`,
		"fallback": "bxs:share-alt",
	});
}

export default Component;
