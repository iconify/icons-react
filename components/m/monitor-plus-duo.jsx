import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k75jqw9vz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bkhpw8bej.css';
import '../../css/i/izggtwq7w.css';
import '../../css/l/lroc48b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k75jqw9vz secondary"/><g class="dt0cm9dhy primary"><path class="bkhpw8bej"/><path class="izggtwq7w"/><path class="lroc48b5p"/></g>`,
		"fallback": "iconaut:monitor-plus-duo",
	});
}

export default Component;
