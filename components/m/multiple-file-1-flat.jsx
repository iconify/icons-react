import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ec8b_s3sk.css';
import '../../css/h/huowa6u2d.css';
import '../../css/w/w34wc278m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ec8b_s3sk"/><path class="huowa6u2d"/><path class="w34wc278m"/></g>`,
		"fallback": "streamline-plump-color:multiple-file-1-flat",
	});
}

export default Component;
