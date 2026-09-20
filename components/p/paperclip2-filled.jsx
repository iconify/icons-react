import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mari--bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mari--bcn"/>`,
		"fallback": "reicon:paperclip2-filled",
	});
}

export default Component;
