import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/of79stbzw.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/n/nyiu9zb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="of79stbzw"/><circle class="mpf1g8bav"/><path clip-rule="evenodd" class="nyiu9zb1e"/></g>`,
		"fallback": "andrsrxn:progress-high",
	});
}

export default Component;
