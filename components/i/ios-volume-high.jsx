import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tej_g1b-d.css';
import '../../css/n/nwq7urbqo.css';
import '../../css/t/twswkdbiy.css';
import '../../css/p/p7wko903m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tej_g1b-d"/><path class="nwq7urbqo"/><path class="twswkdbiy"/><path class="p7wko903m"/>`,
		"fallback": "ion:ios-volume-high",
	});
}

export default Component;
