import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1va1ac7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1va1ac7t"/>`,
		"fallback": "selfhst:jetblue-airways-dark",
	});
}

export default Component;
