import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki-dbhbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki-dbhbkw"/>`,
		"fallback": "coolicons:list-sparkle-fill-round",
	});
}

export default Component;
