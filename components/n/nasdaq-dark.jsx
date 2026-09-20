import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxgzcwb7g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxgzcwb7g"/>`,
		"fallback": "selfhst:nasdaq-dark",
	});
}

export default Component;
