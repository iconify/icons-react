import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rogbht3un.css';
import '../../css/w/wleaz6lpt.css';
import '../../css/y/yymf0qlbr.css';
import '../../css/m/m05wcsb4j.css';
import '../../css/f/fwtb79bbf.css';
import '../../css/z/zst73pb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rogbht3un wm-shadow"/><path class="wleaz6lpt"/><path class="yymf0qlbr"/><path class="m05wcsb4j"/><path class="fwtb79bbf"/><path class="zst73pb9y"/></g>`,
		"fallback": "withicons-retro:settings",
	});
}

export default Component;
