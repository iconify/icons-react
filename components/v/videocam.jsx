import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlmx0q-5g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlmx0q-5g"/>`,
		"fallback": "doodle-icons:videocam",
	});
}

export default Component;
