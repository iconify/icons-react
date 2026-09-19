import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/o/o9xv4kb4o.css';
import '../../css/n/ngfj92bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g4zs08s-q"/><path class="o9xv4kb4o"/><path class="ngfj92bym"/></g>`,
		"fallback": "hugeicons:tire",
	});
}

export default Component;
