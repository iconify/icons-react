import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycu-hhf9w.css';
import '../../css/g/g3yqyfbnj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycu-hhf9w"/><path class="g3yqyfbnj"/>`,
		"fallback": "energy-icons:sofa-20",
	});
}

export default Component;
