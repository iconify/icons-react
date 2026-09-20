import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymesejb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymesejb2n"/>`,
		"fallback": "ri:signal-wifi-error-line",
	});
}

export default Component;
