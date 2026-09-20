import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qitm67bso.css';
import '../../css/v/vwcipgbuu.css';
import '../../css/e/en7xt8pxd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qitm67bso"/><path class="vwcipgbuu"/><path class="en7xt8pxd"/>`,
		"fallback": "selfhst:radarr-4k",
	});
}

export default Component;
