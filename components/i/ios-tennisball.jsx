import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pufuoacsr.css';
import '../../css/o/o1h606vtq.css';
import '../../css/t/ts-4c6cxu.css';
import '../../css/b/bo0gn7djo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pufuoacsr"/><path class="o1h606vtq"/><path class="ts-4c6cxu"/><path class="bo0gn7djo"/>`,
		"fallback": "ion:ios-tennisball",
	});
}

export default Component;
