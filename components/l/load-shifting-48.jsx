import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c65-ehvfy.css';
import '../../css/b/b4gf8bm5e.css';
import '../../css/r/r-xyaib8p.css';
import '../../css/x/xlwzcxeyk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c65-ehvfy"/><path class="b4gf8bm5e"/><path class="r-xyaib8p"/><path class="xlwzcxeyk"/>`,
		"fallback": "energy-icons:load-shifting-48",
	});
}

export default Component;
