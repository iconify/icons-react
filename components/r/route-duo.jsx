import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxt6msr3u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vo8jwqa7q.css';
import '../../css/n/nn1ewrbff.css';
import '../../css/y/yaeyb-g4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxt6msr3u secondary"/><g class="dt0cm9dhy primary"><circle class="vo8jwqa7q"/><path class="nn1ewrbff"/><circle class="yaeyb-g4o"/></g>`,
		"fallback": "iconaut:route-duo",
	});
}

export default Component;
