import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gf4hz1unw.css';
import '../../css/s/sg_27u6xc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gf4hz1unw"/><path class="sg_27u6xc"/></g>`,
		"fallback": "fluent-emoji-flat:lizard",
	});
}

export default Component;
