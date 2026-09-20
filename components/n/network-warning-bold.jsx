import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj7lf7-lu.css';
import '../../css/d/dt6i3k8yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj7lf7-lu"/><path class="dt6i3k8yq"/>`,
		"fallback": "streamline-ultimate:network-warning-bold",
	});
}

export default Component;
