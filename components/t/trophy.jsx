import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/veip_2b3z.css';
import '../../css/w/w_f350bcm.css';
import '../../css/x/xfryy1buo.css';
import '../../css/n/n44x26x9a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="veip_2b3z"/><path class="w_f350bcm"/><path class="xfryy1buo"/><path class="n44x26x9a"/></g>`,
		"fallback": "fluent-emoji-flat:trophy",
	});
}

export default Component;
