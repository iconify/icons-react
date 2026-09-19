import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_czpnbtd.css';
import '../../css/x/xo0vihbnv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_czpnbtd"/><path class="xo0vihbnv"/></g>`,
		"fallback": "fluent-emoji-flat:middle-finger-light",
	});
}

export default Component;
