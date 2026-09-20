import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdpm68b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdpm68b2t"/>`,
		"fallback": "streamline-sharp:lift",
	});
}

export default Component;
