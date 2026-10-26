import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s31d6pb7y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s31d6pb7y"/>`,
		"fallback": "doodle-icons:text-align-center",
	});
}

export default Component;
