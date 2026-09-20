import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zj7lncbcf.css';
import '../../css/s/sv47bvbif.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zj7lncbcf"/><path class="sv47bvbif"/></g>`,
		"fallback": "streamline-color:trending-content",
	});
}

export default Component;
