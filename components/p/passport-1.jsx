import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7fq4xbnr.css';
import '../../css/w/wg5_tobjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7fq4xbnr"/><path class="wg5_tobjq"/>`,
		"fallback": "circum:passport-1",
	});
}

export default Component;
