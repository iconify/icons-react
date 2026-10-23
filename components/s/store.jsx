import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vdww_1bdj.css';
import '../../css/u/u9vki6dgf.css';
import '../../css/v/vq9n9tz_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="vdww_1bdj"/><path class="u9vki6dgf"/><path class="vq9n9tz_m"/></g>`,
		"fallback": "matita:store",
	});
}

export default Component;
