import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd9y6e3na.css';
import '../../css/p/pvyz65bxh.css';
import '../../css/t/tvasz164u.css';
import '../../css/g/g23x1rbog.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd9y6e3na"/><path class="pvyz65bxh"/><path class="tvasz164u"/><path class="g23x1rbog"/>`,
		"fallback": "ion:stats-bars",
	});
}

export default Component;
