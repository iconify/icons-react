import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmasbvbvf.css';
import '../../css/m/mrd-8mfyg.css';
import '../../css/r/rgk7elbpa.css';
import '../../css/x/xzwlyu8qv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nmasbvbvf"/><path class="mrd-8mfyg"/><path class="rgk7elbpa"/><path class="xzwlyu8qv"/></g>`,
		"fallback": "streamline-freehand-color:smiley-kiss-heart",
	});
}

export default Component;
