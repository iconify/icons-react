import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lr2qexbim.css';
import '../../css/v/v7jzlzbxs.css';
import '../../css/y/y021bzbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lr2qexbim"/><path class="v7jzlzbxs wm-a"/><path class="y021bzbie"/></g>`,
		"fallback": "withicons:key-round-duo",
	});
}

export default Component;
