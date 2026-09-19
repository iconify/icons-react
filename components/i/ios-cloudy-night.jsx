import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s04t-wbch.css';
import '../../css/o/ordjzlbcc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s04t-wbch"/><path class="ordjzlbcc"/>`,
		"fallback": "ion:ios-cloudy-night",
	});
}

export default Component;
