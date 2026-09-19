import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yje01jb6x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yje01jb6x"/>`,
		"fallback": "ion:md-clock",
	});
}

export default Component;
