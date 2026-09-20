import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5hztnb-o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5hztnb-o"/>`,
		"fallback": "streamline:interface-edit-pin-2-pin-push-thumbtack",
	});
}

export default Component;
