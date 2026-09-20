import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7c1f8bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7c1f8bkh"/>`,
		"fallback": "pixelarticons:siren-sharp",
	});
}

export default Component;
