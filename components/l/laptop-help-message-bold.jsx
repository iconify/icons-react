import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9voh_k8p.css';
import '../../css/u/uv6e99bqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9voh_k8p"/><path class="uv6e99bqb"/>`,
		"fallback": "streamline-ultimate:laptop-help-message-bold",
	});
}

export default Component;
