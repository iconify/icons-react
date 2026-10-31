import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwnfvccbk.css';
import '../../css/o/ogyfqir2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwnfvccbk"/><path class="ogyfqir2o"/></g>`,
		"fallback": "coolicons:package-duotone-round",
	});
}

export default Component;
