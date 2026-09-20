import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/twygukbdd.css';
import '../../css/k/kf_oy9bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="twygukbdd"/><path class="kf_oy9bit"/></g>`,
		"fallback": "streamline-ultimate:navigation-arrows-left-1",
	});
}

export default Component;
