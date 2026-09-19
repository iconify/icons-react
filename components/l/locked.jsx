import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvcs4u9hd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvcs4u9hd"/>`,
		"fallback": "ion:locked",
	});
}

export default Component;
