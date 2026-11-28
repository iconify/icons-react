import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qy-zaibqs.css';
import '../../css/v/v5pq3qw6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qy-zaibqs"/><path class="v5pq3qw6f"/></g>`,
		"fallback": "iconaut:salt-solid",
	});
}

export default Component;
