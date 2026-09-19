import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6wzr80le.css';
import '../../css/y/yt-9su_gy.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6wzr80le"/><path class="yt-9su_gy"/>`,
		"fallback": "gis:shape-file",
	});
}

export default Component;
