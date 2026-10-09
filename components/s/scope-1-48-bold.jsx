import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seoan67mj.css';
import '../../css/f/f9jh7qbdq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seoan67mj"/><path class="f9jh7qbdq"/>`,
		"fallback": "energy-icons:scope-1-48-bold",
	});
}

export default Component;
