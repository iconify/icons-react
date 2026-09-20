import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbq02_gxn.css';
import '../../css/q/qlu-mbtpl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbq02_gxn"/><path class="qlu-mbtpl"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-75-percent-1",
	});
}

export default Component;
