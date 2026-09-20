import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vrht0cc8j.css';
import '../../css/e/eprq-zw1y.css';
import '../../css/s/ssl9qbxfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vrht0cc8j"/><path class="eprq-zw1y"/><path class="ssl9qbxfx"/></g>`,
		"fallback": "reicon:like-tag",
	});
}

export default Component;
