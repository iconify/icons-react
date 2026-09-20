import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hqlgu_s3w.css';
import '../../css/d/dzz7obf6g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hqlgu_s3w"/><path class="dzz7obf6g"/></g>`,
		"fallback": "streamline-color:signal-low",
	});
}

export default Component;
