import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf467nb8v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf467nb8v"/>`,
		"fallback": "ion:md-eye",
	});
}

export default Component;
