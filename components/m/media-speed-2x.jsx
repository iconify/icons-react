import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojm9wsbdn.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojm9wsbdn"/>`,
		"fallback": "nrk:media-speed-2x",
	});
}

export default Component;
