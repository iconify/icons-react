import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6vf3kbwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6vf3kbwi"/>`,
		"fallback": "streamline-plump:pool-ladder",
	});
}

export default Component;
