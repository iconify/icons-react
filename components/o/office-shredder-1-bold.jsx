import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq07flbjd.css';
import '../../css/y/y_oyl2b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq07flbjd"/><path class="y_oyl2b1h"/>`,
		"fallback": "streamline-ultimate:office-shredder-1-bold",
	});
}

export default Component;
