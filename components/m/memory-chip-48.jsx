import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq31kobat.css';
import '../../css/x/xcgq2ybhj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq31kobat"/><path class="xcgq2ybhj"/>`,
		"fallback": "energy-icons:memory-chip-48",
	});
}

export default Component;
