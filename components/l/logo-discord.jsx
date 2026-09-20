import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w819qrbfo.css';
import '../../css/d/dpt-y8p_m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w819qrbfo"/><path class="dpt-y8p_m"/>`,
		"fallback": "streamline-pixel:logo-discord",
	});
}

export default Component;
