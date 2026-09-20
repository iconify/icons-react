import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9oelhb9q.css';
import '../../css/x/x19qmcbwy.css';
import '../../css/n/naxwwib6r.css';
import '../../css/n/n1e2xcfwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9oelhb9q"/><path class="x19qmcbwy"/><path class="naxwwib6r"/><path class="n1e2xcfwy"/></g>`,
		"fallback": "streamline-ultimate-color:read-email-at-1",
	});
}

export default Component;
