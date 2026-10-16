import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3hnj1bgs.css';
import '../../css/n/ng_3h1b8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3hnj1bgs"/><path class="ng_3h1b8q"/>`,
		"fallback": "energy-icons:pipe-tee-48",
	});
}

export default Component;
