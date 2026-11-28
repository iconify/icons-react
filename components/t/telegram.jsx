import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
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
		"content": `<g class="dt0cm9dhy"><path class="ggubv6whl"/><path class="sk3qebj-f"/><path class="oet5zxb6o"/></g>`,
		"fallback": "iconaut:telegram",
	});
}

export default Component;
