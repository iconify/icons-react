import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfq1h5t6c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/ggubv6whl.css';
import '../../css/s/sk3qebj-f.css';
import '../../css/o/oet5zxb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfq1h5t6c secondary"/><g class="dt0cm9dhy primary"><path class="ggubv6whl"/><path class="sk3qebj-f"/><path class="oet5zxb6o"/></g>`,
		"fallback": "iconaut:telegram-duo",
	});
}

export default Component;
