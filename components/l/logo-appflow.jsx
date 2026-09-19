import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuqgrccsg.css';
import '../../css/o/obu153b6s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuqgrccsg"/><path class="obu153b6s"/>`,
		"fallback": "ion:logo-appflow",
	});
}

export default Component;
