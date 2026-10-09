import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s68i8th-k.css';
import '../../css/r/r8211o0be.css';
import '../../css/j/j_9eze8nk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s68i8th-k"/><path class="r8211o0be"/><path class="j_9eze8nk"/>`,
		"fallback": "energy-icons:offshore-wind-farm-48",
	});
}

export default Component;
