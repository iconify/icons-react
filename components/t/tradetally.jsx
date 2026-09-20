import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrtx0ebqp.css';
import '../../css/a/a74kpfbuc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrtx0ebqp"/><path class="a74kpfbuc"/>`,
		"fallback": "selfhst:tradetally",
	});
}

export default Component;
