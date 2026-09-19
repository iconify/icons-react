import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6ujsc6dr.css';
import '../../css/o/os1y-ybmu.css';
import '../../css/i/ij-pcdclg.css';
import '../../css/l/l2mbojb3k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h6ujsc6dr"/><path class="os1y-ybmu"/><path class="ij-pcdclg"/><path class="l2mbojb3k"/></g>`,
		"fallback": "fluent-emoji-flat:loudspeaker",
	});
}

export default Component;
