import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/ywx4hvbtf.css';
import '../../css/q/qkmu5thhd.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k ywx4hvbtf"/><path class="qkmu5thhd wm-a"/><path class="wcaq-jbkf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:trending-down",
	});
}

export default Component;
