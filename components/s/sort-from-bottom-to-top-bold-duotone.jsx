import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb7pjtbyk.css';
import '../../css/t/t8atl23et.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/i/ik91aybia.css';
import '../../css/n/ntcy9jf7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb7pjtbyk"/><path class="t8atl23et"/><g class="xtpeb-edw"><path class="ik91aybia"/><path class="ntcy9jf7q"/></g>`,
		"fallback": "solar:sort-from-bottom-to-top-bold-duotone",
	});
}

export default Component;
