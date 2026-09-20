import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6l39ob8u.css';
import '../../css/b/bsqx4bc-w.css';
import '../../css/i/i34px_bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n6l39ob8u"/><path class="bsqx4bc-w"/><path class="i34px_bie"/></g>`,
		"fallback": "tdesign:location",
	});
}

export default Component;
