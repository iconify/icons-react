import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtiu8tb2k.css';
import '../../css/o/oxin_cb0v.css';
import '../../css/m/mt4ydix1y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtiu8tb2k"/><path class="oxin_cb0v"/><path class="mt4ydix1y"/>`,
		"fallback": "devicon:mongoose-wordmark",
	});
}

export default Component;
