import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qf5nllbzu.css';
import '../../css/g/g6zux9y2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qf5nllbzu"/><circle class="g6zux9y2r"/></g>`,
		"fallback": "reicon:side-profile",
	});
}

export default Component;
