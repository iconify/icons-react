import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/ggubv6whl.css';
import '../../css/v/vt6-fiosq.css';
import '../../css/p/p46zpu12j.css';
import '../../css/k/k06lkun7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ggubv6whl"/><path class="vt6-fiosq"/><path class="p46zpu12j"/><path class="k06lkun7c"/></g>`,
		"fallback": "iconaut:spotify",
	});
}

export default Component;
