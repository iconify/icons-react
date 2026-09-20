import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtt4lrb1l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtt4lrb1l"/>`,
		"fallback": "selfhst:open-webui-light",
	});
}

export default Component;
