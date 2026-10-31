import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i3-g9mb1u.css';
import '../../css/s/sowym6bkq.css';
import '../../css/c/cr7oqgpmf.css';
import '../../css/d/dsrbxx2bx.css';
import '../../css/u/uxm4acb3v.css';
import '../../css/m/m-bx9ib8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="i3-g9mb1u wm-shadow"/><path class="sowym6bkq"/><path class="cr7oqgpmf"/><path class="dsrbxx2bx"/><path class="uxm4acb3v"/><path class="m-bx9ib8r wm-s"/></g>`,
		"fallback": "withicons-retro:remote-control",
	});
}

export default Component;
