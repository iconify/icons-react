import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skqj38hxr.css';
import '../../css/y/y3lt4nbkz.css';
import '../../css/a/aay3jcb6i.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 skqj38hxr"/><path class="clr-i-outline clr-i-outline-path-2 y3lt4nbkz"/><path class="aay3jcb6i clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:slider-line",
	});
}

export default Component;
