import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcqt7wwpl.css';
import '../../css/i/i9qxuzbiz.css';
import '../../css/c/ce38m5bqe.css';
import '../../css/k/kyghrub6c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wcqt7wwpl"/><path class="i9qxuzbiz"/><path class="ce38m5bqe"/><path class="kyghrub6c"/></g>`,
		"fallback": "streamline-flex-color:steps-2",
	});
}

export default Component;
