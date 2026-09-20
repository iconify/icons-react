import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mu_eozumq.css';
import '../../css/r/r9fh9fbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mu_eozumq"/><path class="r9fh9fbxx"/></g>`,
		"fallback": "reicon:video-play",
	});
}

export default Component;
