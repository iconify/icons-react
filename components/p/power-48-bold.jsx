import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbytv9biz.css';
import '../../css/i/ifxacxt9v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbytv9biz"/><path class="ifxacxt9v"/>`,
		"fallback": "energy-icons:power-48-bold",
	});
}

export default Component;
