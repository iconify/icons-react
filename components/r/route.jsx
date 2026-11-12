import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h__8rnb5v.css';
import '../../css/x/xjh3njbok.css';
import '../../css/o/og_9js9al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h__8rnb5v"/><circle class="xjh3njbok"/><circle class="og_9js9al"/></g>`,
		"fallback": "lucide:route",
	});
}

export default Component;
