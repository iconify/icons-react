import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcch-qbaq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcch-qbaq"/>`,
		"fallback": "heroicons:share-20-solid",
	});
}

export default Component;
