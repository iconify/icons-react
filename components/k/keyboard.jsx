import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rh7upse8n.css';
import '../../css/a/a71r-q15w.css';
import '../../css/s/scfx2467n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rh7upse8n"/><path class="a71r-q15w"/><path class="scfx2467n"/></g>`,
		"fallback": "tdesign:keyboard",
	});
}

export default Component;
