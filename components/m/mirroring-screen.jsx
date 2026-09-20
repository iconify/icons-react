import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l2m2ywd7i.css';
import '../../css/h/higza0bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l2m2ywd7i"/><path class="higza0bsf"/></g>`,
		"fallback": "reicon:mirroring-screen",
	});
}

export default Component;
