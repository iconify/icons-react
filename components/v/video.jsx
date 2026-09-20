import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr5gkzbln.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr5gkzbln"/>`,
		"fallback": "lineicons:video",
	});
}

export default Component;
