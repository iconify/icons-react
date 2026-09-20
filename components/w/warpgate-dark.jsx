import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x07v6nbya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x07v6nbya"/>`,
		"fallback": "selfhst:warpgate-dark",
	});
}

export default Component;
