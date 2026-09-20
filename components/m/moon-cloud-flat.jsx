import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oo-ishg7o.css';
import '../../css/x/xz8hkgbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oo-ishg7o"/><path class="xz8hkgbgg"/></g>`,
		"fallback": "streamline-sharp-color:moon-cloud-flat",
	});
}

export default Component;
