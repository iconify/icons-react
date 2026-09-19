import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xcgj7jbrn.css';
import '../../css/n/n50kjvxhj.css';
import '../../css/y/y2ebboaxr.css';
import '../../css/k/kt5shjbak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xcgj7jbrn"/><rect class="n50kjvxhj"/><path class="y2ebboaxr"/><path class="kt5shjbak"/></g>`,
		"fallback": "icon-park-outline:juice",
	});
}

export default Component;
