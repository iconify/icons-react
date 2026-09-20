import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/svpwambew.css';
import '../../css/l/lwo-nbbud.css';
import '../../css/v/v2l5ufa5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="svpwambew"/><circle class="lwo-nbbud"/><path class="v2l5ufa5d"/></g>`,
		"fallback": "reicon:unordered-list",
	});
}

export default Component;
