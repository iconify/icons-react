import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eq5uv881x.css';
import '../../css/k/klhdv0ueo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eq5uv881x"/><circle class="klhdv0ueo"/></g>`,
		"fallback": "humbleicons:tag",
	});
}

export default Component;
