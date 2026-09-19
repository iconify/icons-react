import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muygl9lui.css';
import '../../css/r/rg45nfbgg.css';
import '../../css/a/aaogj5ntx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muygl9lui"/><path class="rg45nfbgg"/><path class="aaogj5ntx"/>`,
		"fallback": "ion:ios-albums-outline",
	});
}

export default Component;
