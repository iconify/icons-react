import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffwtwdbhy.css';
import '../../css/e/eh0t_9g0s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffwtwdbhy"/><path class="eh0t_9g0s"/>`,
		"fallback": "selfhst:rancher-kubewarden",
	});
}

export default Component;
