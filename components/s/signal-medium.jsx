import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anfmxfb2p.css';
import '../../css/a/a97053_8f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="anfmxfb2p"/><path class="a97053_8f"/></g>`,
		"fallback": "streamline-color:signal-medium",
	});
}

export default Component;
