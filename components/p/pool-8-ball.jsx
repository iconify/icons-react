import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/futv6obbu.css';
import '../../css/t/tgoxe12qp.css';
import '../../css/k/kun41p0ay.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="futv6obbu"/><path class="tgoxe12qp"/><path class="kun41p0ay"/></g>`,
		"fallback": "fluent-emoji-flat:pool-8-ball",
	});
}

export default Component;
