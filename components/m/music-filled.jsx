import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh-qgz3bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh-qgz3bq"/>`,
		"fallback": "reicon:music-filled",
	});
}

export default Component;
