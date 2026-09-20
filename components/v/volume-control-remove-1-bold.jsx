import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6f5mz37c.css';
import '../../css/p/p0ds3lbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6f5mz37c"/><path class="p0ds3lbox"/>`,
		"fallback": "streamline-ultimate:volume-control-remove-1-bold",
	});
}

export default Component;
