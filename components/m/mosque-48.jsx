import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s82-gfb1o.css';
import '../../css/v/vs4bry39s.css';
import '../../css/f/fj5kn0w7n.css';
import '../../css/u/uedre7bit.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s82-gfb1o"/><path class="vs4bry39s"/><path class="fj5kn0w7n"/><path class="uedre7bit"/>`,
		"fallback": "energy-icons:mosque-48",
	});
}

export default Component;
