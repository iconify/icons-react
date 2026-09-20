import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn_fvc00b.css';
import '../../css/s/splbbwb0e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn_fvc00b"/><circle class="splbbwb0e"/>`,
		"fallback": "ooui:key",
	});
}

export default Component;
