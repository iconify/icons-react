import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb3m0hb2p.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb3m0hb2p"/>`,
		"fallback": "memory:tooltip-end-help",
	});
}

export default Component;
