import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsna-cb2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsna-cb2f"/>`,
		"fallback": "selfhst:notesnook-dark",
	});
}

export default Component;
