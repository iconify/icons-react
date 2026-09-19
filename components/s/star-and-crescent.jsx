import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z269oc3zt.css';
import '../../css/n/n8_3uobgm.css';
import '../../css/v/vnyt80nxi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-180 30 30)" class="z269oc3zt"/><path class="n8_3uobgm"/><path class="vnyt80nxi"/></g>`,
		"fallback": "fluent-emoji-flat:star-and-crescent",
	});
}

export default Component;
