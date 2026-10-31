import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/r/r-d0e0b3y.css';
import '../../css/y/yrdvb5zbb.css';
import '../../css/u/uk_qys3fu.css';
import '../../css/g/gd1_dnznc.css';
import '../../css/d/dsqctwolx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="r-d0e0b3y"/><path class="yrdvb5zbb"/><path class="uk_qys3fu"/><path class="gd1_dnznc"/><path class="dsqctwolx"/></g>`,
		"fallback": "withicons-retro:square-plus",
	});
}

export default Component;
