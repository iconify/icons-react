import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msnernbby.css';
import '../../css/q/qw35iee-y.css';
import '../../css/s/s4kdj5j1y.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/b/bw1cmbb3h.css';
import '../../css/y/y5m0rdbxf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msnernbby"/><path class="qw35iee-y"/><path class="s4kdj5j1y"/><g class="jn8qy4bru"><path class="bw1cmbb3h"/><path class="y5m0rdbxf"/></g>`,
		"fallback": "openmoji:rock",
	});
}

export default Component;
