import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxh105bzq.css';
import '../../css/l/lr2vlobkm.css';
import '../../css/y/y6nfipdrl.css';
import '../../css/b/bd0nzvbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxh105bzq"/><path class="lr2vlobkm"/><path class="y6nfipdrl"/><path class="bd0nzvbjr"/>`,
		"fallback": "token:rpg",
	});
}

export default Component;
