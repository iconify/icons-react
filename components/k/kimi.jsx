import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf42lb8e.css';
import '../../css/w/wqnhesbmp.css';
import '../../css/s/s5v75ybaq.css';
import '../../css/x/xuia6kbyj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kuf42lb8e"><path class="wqnhesbmp"/><path class="s5v75ybaq"/><path class="xuia6kbyj"/></g>`,
		"fallback": "thesvg-color:kimi",
	});
}

export default Component;
