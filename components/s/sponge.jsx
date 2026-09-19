import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omm4qdoyz.css';
import '../../css/t/tphx6mb1h.css';
import '../../css/s/sb1if-bxn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="omm4qdoyz"/><path class="tphx6mb1h"/><path class="sb1if-bxn"/></g>`,
		"fallback": "fluent-emoji-flat:sponge",
	});
}

export default Component;
