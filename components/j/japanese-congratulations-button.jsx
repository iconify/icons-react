import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/isvay0t2g.css';
import '../../css/a/apk6facpv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="isvay0t2g"/><path class="apk6facpv"/></g>`,
		"fallback": "fluent-emoji-flat:japanese-congratulations-button",
	});
}

export default Component;
