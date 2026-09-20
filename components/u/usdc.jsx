import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdr4ynbph.css';
import '../../css/y/y-mhm093y.css';
import '../../css/v/v286mkswn.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdr4ynbph"/><path class="y-mhm093y"/><path class="v286mkswn"/>`,
		"fallback": "thesvg-color:usdc",
	});
}

export default Component;
