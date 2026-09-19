import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-dt4mq6g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-dt4mq6g"/>`,
		"fallback": "fa6-solid:virus-covid",
	});
}

export default Component;
