import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymmm_yblj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymmm_yblj"/>`,
		"fallback": "ion:md-snow",
	});
}

export default Component;
