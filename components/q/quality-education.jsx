import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vgaqapt1k.css';
import '../../css/s/sdz0wnp4t.css';
import '../../css/l/lpkatcc-r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vgaqapt1k"/><path class="sdz0wnp4t"/><path class="lpkatcc-r"/></g>`,
		"fallback": "streamline-color:quality-education",
	});
}

export default Component;
