import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0c59ifwm.css';
import '../../css/x/x-q3vxbaq.css';
import '../../css/n/nj4hxu43c.css';
import '../../css/k/k7hj02bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0c59ifwm wm-k"/><path class="wm-k x-q3vxbaq"/><path class="nj4hxu43c wm-a"/><path class="k7hj02bqa wm-a"/>`,
		"fallback": "withicons-bauhaus:sparkles",
	});
}

export default Component;
