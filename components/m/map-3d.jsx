import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0fjx8q_o.css';
import '../../css/f/f29ft8bcr.css';
import '../../css/f/fx974_bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a0fjx8q_o"/><path class="f29ft8bcr"/><path class="fx974_bqt"/></g>`,
		"fallback": "tdesign:map-3d",
	});
}

export default Component;
