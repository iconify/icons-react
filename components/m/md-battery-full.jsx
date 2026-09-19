import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozx49kkbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozx49kkbq"/>`,
		"fallback": "ion:md-battery-full",
	});
}

export default Component;
