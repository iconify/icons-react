import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nnj9csb9a.css';
import '../../css/n/n_53gi21w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="nnj9csb9a"/><path class="n_53gi21w"/></g>`,
		"fallback": "keyline-icons:queue-sharp-two-tone",
	});
}

export default Component;
