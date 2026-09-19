import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awj64bb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awj64bb9d"/>`,
		"fallback": "flowbite:share-all-outline",
	});
}

export default Component;
