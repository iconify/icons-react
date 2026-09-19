import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mh6cbej9q.css';
import '../../css/s/shfkwhm7d.css';
import '../../css/t/thyp_qbyh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mh6cbej9q"/><path class="shfkwhm7d"/><path class="thyp_qbyh"/></g>`,
		"fallback": "fluent-emoji-flat:long-drum",
	});
}

export default Component;
