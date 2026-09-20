import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5zt3ccdb.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5zt3ccdb"/>`,
		"fallback": "nrk:media-speed-1-5x",
	});
}

export default Component;
