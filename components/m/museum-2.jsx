import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bat42qb7w.css';
import '../../css/s/sva0p2u4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bat42qb7w"/><path class="sva0p2u4x"/></g>`,
		"fallback": "tdesign:museum-2",
	});
}

export default Component;
