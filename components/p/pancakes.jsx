import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mnkxd3b9o.css';
import '../../css/a/a_d29mp8e.css';
import '../../css/r/rxfs97xjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mnkxd3b9o"/><path class="a_d29mp8e"/><path class="rxfs97xjv"/></g>`,
		"fallback": "iconaut:pancakes",
	});
}

export default Component;
