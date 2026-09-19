import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqc52gbkq.css';

const viewBox = {"width":384,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqc52gbkq"/>`,
		"fallback": "zmdi:notifications-add",
	});
}

export default Component;
