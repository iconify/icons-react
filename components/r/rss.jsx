import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s40gp385v.css';
import '../../css/h/hntz4fq6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s40gp385v"/><circle class="hntz4fq6i"/></g>`,
		"fallback": "humbleicons:rss",
	});
}

export default Component;
