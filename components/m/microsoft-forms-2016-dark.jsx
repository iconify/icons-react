import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuz9-1bop.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuz9-1bop"/>`,
		"fallback": "selfhst:microsoft-forms-2016-dark",
	});
}

export default Component;
