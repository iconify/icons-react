import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofvi3bb5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofvi3bb5p"/>`,
		"fallback": "doodle-icons:underline",
	});
}

export default Component;
