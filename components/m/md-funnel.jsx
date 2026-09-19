import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmq4v6njp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmq4v6njp"/>`,
		"fallback": "ion:md-funnel",
	});
}

export default Component;
