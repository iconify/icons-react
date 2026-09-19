import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vywvb1b-v.css';
import '../../css/x/xkm97ebzi.css';
import '../../css/k/k6f33dbfd.css';
import '../../css/n/n6iih0rsh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vywvb1b-v"/><path class="xkm97ebzi"/><path class="k6f33dbfd"/><path class="n6iih0rsh"/></g>`,
		"fallback": "fluent-emoji-flat:placard",
	});
}

export default Component;
