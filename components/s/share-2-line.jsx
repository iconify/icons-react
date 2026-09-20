import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxwz7_bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxwz7_bes"/>`,
		"fallback": "ri:share-2-line",
	});
}

export default Component;
