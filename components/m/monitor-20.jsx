import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1uql4bun.css';
import '../../css/s/s4qd1rblb.css';
import '../../css/a/a19dqulkp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1uql4bun"/><path class="s4qd1rblb"/><path class="a19dqulkp"/>`,
		"fallback": "energy-icons:monitor-20",
	});
}

export default Component;
