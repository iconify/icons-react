import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2wv7tbdk.css';
import '../../css/f/flbhffbne.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2wv7tbdk"/><path class="flbhffbne"/>`,
		"fallback": "energy-icons:scanner-20",
	});
}

export default Component;
