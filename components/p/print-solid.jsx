import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry68nbwkv.css';
import '../../css/b/b09d1x-lb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry68nbwkv"/><path class="b09d1x-lb"/>`,
		"fallback": "teenyicons:print-solid",
	});
}

export default Component;
