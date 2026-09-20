import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/talkkf4ro.css';
import '../../css/o/o35tmfo7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="talkkf4ro"/><path class="o35tmfo7o"/></g>`,
		"fallback": "solar:maximize-broken",
	});
}

export default Component;
