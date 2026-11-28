import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ocqdgwbey.css';
import '../../css/e/eq-mjz83i.css';
import '../../css/y/ysndhgbsu.css';
import '../../css/r/rguee7b2g.css';
import '../../css/l/lp9p-ccaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ocqdgwbey"/><path class="eq-mjz83i"/><path class="ysndhgbsu"/><path class="rguee7b2g"/><path class="lp9p-ccaq"/></g>`,
		"fallback": "iconaut:strawberry",
	});
}

export default Component;
