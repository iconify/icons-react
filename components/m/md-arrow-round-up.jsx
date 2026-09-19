import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rum1esb-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rum1esb-h"/>`,
		"fallback": "ion:md-arrow-round-up",
	});
}

export default Component;
