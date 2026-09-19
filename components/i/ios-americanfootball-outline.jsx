import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shqqhybdk.css';
import '../../css/r/rqafvib9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shqqhybdk"/><path class="rqafvib9k"/>`,
		"fallback": "ion:ios-americanfootball-outline",
	});
}

export default Component;
