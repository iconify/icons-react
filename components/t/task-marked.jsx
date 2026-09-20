import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_58evb9q.css';
import '../../css/p/pmff0j40v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_58evb9q"/><path class="pmff0j40v"/></g>`,
		"fallback": "tdesign:task-marked",
	});
}

export default Component;
