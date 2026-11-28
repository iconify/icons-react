import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hp4l88byq.css';
import '../../css/h/hx-ao3bqx.css';
import '../../css/u/ukkfx61xp.css';
import '../../css/c/cvh45bpuo.css';
import '../../css/b/bcowwmgef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hp4l88byq"/><path class="hx-ao3bqx"/><path class="ukkfx61xp"/><path class="cvh45bpuo"/><path class="bcowwmgef"/></g>`,
		"fallback": "iconaut:type-vertical-duo",
	});
}

export default Component;
