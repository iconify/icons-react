import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/y/yxu38m.css';
import '../../css/s/sxex9y.css';
import '../../css/s/so-from-30.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c yxu38m"/><path class="a0m25c sxex9y"/>`,
		"fallback": "line-md:pause",
	});
}

export default Component;
