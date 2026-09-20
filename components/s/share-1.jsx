import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuhln8cou.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuhln8cou"/>`,
		"fallback": "radix-icons:share-1",
	});
}

export default Component;
