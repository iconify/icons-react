import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lybztmbkc.css';
import '../../css/z/zkh_48bqp.css';
import '../../css/y/ycoqy4zfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lybztmbkc"/><path class="zkh_48bqp"/><path class="ycoqy4zfy"/></g>`,
		"fallback": "lucide-extended:list-clock-duotone",
	});
}

export default Component;
