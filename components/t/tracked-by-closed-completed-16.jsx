import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-00eccfu.css';
import '../../css/a/ahjjzsb9q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-00eccfu"/><path class="ahjjzsb9q"/>`,
		"fallback": "octicon:tracked-by-closed-completed-16",
	});
}

export default Component;
