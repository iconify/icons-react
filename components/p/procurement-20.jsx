import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvm_9zb2m.css';
import '../../css/w/wx5f8bcnt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvm_9zb2m"/><path class="wx5f8bcnt"/>`,
		"fallback": "energy-icons:procurement-20",
	});
}

export default Component;
