import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4q6eknm.css';
import '../../css/q/q53h0-hpm.css';
import '../../css/j/jknat6yla.css';
import '../../css/l/lba8bpl1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ti4q6eknm"><path class="q53h0-hpm"/><path class="jknat6yla"/><path class="lba8bpl1h"/></g>`,
		"fallback": "icon-park-solid:treadmill-one",
	});
}

export default Component;
