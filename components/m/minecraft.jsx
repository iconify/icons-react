import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpfxdab7q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpfxdab7q"/>`,
		"fallback": "file-icons:minecraft",
	});
}

export default Component;
