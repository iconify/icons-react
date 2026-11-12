import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob9sxvbzl.css';
import '../../css/w/wnxfwsbhv.css';
import '../../css/y/y87stwskn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob9sxvbzl"/><path class="wnxfwsbhv"/><path class="y87stwskn"/>`,
		"fallback": "selfhst:travstats",
	});
}

export default Component;
