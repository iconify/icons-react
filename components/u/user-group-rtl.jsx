import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4i99xbag.css';
import '../../css/y/yh894zb-l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4i99xbag"/><circle class="yh894zb-l"/>`,
		"fallback": "ooui:user-group-rtl",
	});
}

export default Component;
