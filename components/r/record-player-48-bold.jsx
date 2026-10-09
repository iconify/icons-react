import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxdnnozti.css';
import '../../css/r/rm8mvg9xh.css';
import '../../css/r/r1mw8e2fu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxdnnozti"/><path class="rm8mvg9xh"/><path class="r1mw8e2fu"/>`,
		"fallback": "energy-icons:record-player-48-bold",
	});
}

export default Component;
