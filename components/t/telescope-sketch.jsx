import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qcj0w7beu.css';
import '../../css/g/go8wiqrnw.css';
import '../../css/j/jj7v60bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qcj0w7beu wm-a"/><path class="go8wiqrnw wm-k"/><path class="jj7v60bhl wm-a"/></g>`,
		"fallback": "withicons:telescope-sketch",
	});
}

export default Component;
