import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stkvmwbol.css';
import '../../css/e/ehcimtb9e.css';
import '../../css/n/ng7sm478m.css';
import '../../css/o/opipx0bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stkvmwbol"/><path class="ehcimtb9e"/><path class="ng7sm478m"/><path class="opipx0bty"/></g>`,
		"fallback": "streamline-ultimate-color:paragraph-image-left",
	});
}

export default Component;
