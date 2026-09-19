import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jrr___b0r.css';
import '../../css/g/gzovhsluf.css';
import '../../css/f/f2tulrb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jrr___b0r"/><path class="gzovhsluf"/><path class="f2tulrb0m"/></g>`,
		"fallback": "hugeicons:school-01",
	});
}

export default Component;
