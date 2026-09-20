import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hxw6_b0rh.css';
import '../../css/k/kco3tdlia.css';
import '../../css/s/sr5x3vbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hxw6_b0rh"/><path class="kco3tdlia"/><path class="sr5x3vbyo"/></g>`,
		"fallback": "lucide:repeat-1",
	});
}

export default Component;
