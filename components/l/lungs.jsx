import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6x25je3c.css';
import '../../css/l/l9wcuz8dq.css';
import '../../css/m/mchh0pr4c.css';
import '../../css/l/lbbeo5bez.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u6x25je3c"/><path class="l9wcuz8dq"/><path class="mchh0pr4c"/><path class="lbbeo5bez"/></g>`,
		"fallback": "fluent-emoji-flat:lungs",
	});
}

export default Component;
