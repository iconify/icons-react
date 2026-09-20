import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d457f5bbj.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d457f5bbj"/>`,
		"fallback": "nrk:media-speed-0-8x",
	});
}

export default Component;
