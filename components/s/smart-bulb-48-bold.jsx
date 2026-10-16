import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0m3wcb9a.css';
import '../../css/e/e72pk-7vm.css';
import '../../css/b/bowjjxblk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0m3wcb9a"/><path class="e72pk-7vm"/><path class="bowjjxblk"/>`,
		"fallback": "energy-icons:smart-bulb-48-bold",
	});
}

export default Component;
