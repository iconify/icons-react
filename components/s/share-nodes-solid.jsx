import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq34xdb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq34xdb4o"/>`,
		"fallback": "flowbite:share-nodes-solid",
	});
}

export default Component;
