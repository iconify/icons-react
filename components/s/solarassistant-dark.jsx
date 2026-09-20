import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydcy8zb4e.css';
import '../../css/u/uq2o6vb1m.css';
import '../../css/j/jhz-ysexk.css';
import '../../css/e/e8fm-qebd.css';
import '../../css/u/uvlxmebqa.css';
import '../../css/f/fnvbkcg9t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydcy8zb4e"/><path class="uq2o6vb1m"/><path class="jhz-ysexk"/><path class="e8fm-qebd"/><path class="uvlxmebqa"/><path class="fnvbkcg9t"/>`,
		"fallback": "selfhst:solarassistant-dark",
	});
}

export default Component;
