import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xa7inn8kq.css';
import '../../css/h/h5rmhobgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xa7inn8kq"/><path class="h5rmhobgq"/></g>`,
		"fallback": "coolicons:square-sparkle-duotone-round",
	});
}

export default Component;
