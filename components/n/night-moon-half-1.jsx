import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xksq0zbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xksq0zbuo"/>`,
		"fallback": "streamline-ultimate:night-moon-half-1",
	});
}

export default Component;
