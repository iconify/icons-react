import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7mi3lqpf.css';
import '../../css/n/n5f4dctir.css';
import '../../css/h/hwn9kbc0q.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="m7mi3lqpf"/><path class="n5f4dctir"/><path class="hwn9kbc0q"/>`,
		"fallback": "geo:turf-center",
	});
}

export default Component;
