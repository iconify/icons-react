import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exs-2eb4s.css';
import '../../css/u/u5pw5ft_q.css';
import '../../css/m/mix-cbc3h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="exs-2eb4s"/><path class="u5pw5ft_q"/><path class="mix-cbc3h"/></g>`,
		"fallback": "icon-park-outline:play-volleyball",
	});
}

export default Component;
