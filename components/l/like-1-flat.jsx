import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sjpdx5b9m.css';
import '../../css/s/sbmi6hbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sjpdx5b9m"/><path class="sbmi6hbcx"/></g>`,
		"fallback": "streamline-sharp-color:like-1-flat",
	});
}

export default Component;
