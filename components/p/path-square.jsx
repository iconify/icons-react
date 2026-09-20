import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kkahad8hq.css';
import '../../css/x/xd0yqnjqw.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kkahad8hq"/><path class="xd0yqnjqw"/><path class="rvymobzlx"/></g>`,
		"fallback": "reicon:path-square",
	});
}

export default Component;
