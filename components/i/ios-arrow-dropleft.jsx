import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkskkgb5x.css';
import '../../css/n/nek1lu3pi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkskkgb5x"/><path class="nek1lu3pi"/>`,
		"fallback": "ion:ios-arrow-dropleft",
	});
}

export default Component;
