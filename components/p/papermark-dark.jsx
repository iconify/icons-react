import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg8z4pjgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg8z4pjgc"/>`,
		"fallback": "selfhst:papermark-dark",
	});
}

export default Component;
