import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq3z381fk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq3z381fk"/>`,
		"fallback": "ion:md-trending-down",
	});
}

export default Component;
