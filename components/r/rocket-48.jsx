import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-v249b3a.css';
import '../../css/u/uljwuewwu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-v249b3a"/><path class="uljwuewwu"/>`,
		"fallback": "energy-icons:rocket-48",
	});
}

export default Component;
