import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhhvqwbng.css';
import '../../css/e/era03mble.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhhvqwbng"/><path class="era03mble"/>`,
		"fallback": "energy-icons:scroll-48-bold",
	});
}

export default Component;
