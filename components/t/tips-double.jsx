import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nesl1-bow.css';
import '../../css/c/clqqsk1lu.css';
import '../../css/e/e_79v64pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nesl1-bow"/><path class="clqqsk1lu"/><path class="e_79v64pq"/></g>`,
		"fallback": "tdesign:tips-double",
	});
}

export default Component;
