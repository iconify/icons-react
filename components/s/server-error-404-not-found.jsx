import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/aqg2-5bbs.css';
import '../../css/k/kib7r1wvv.css';
import '../../css/k/kvsiuof9s.css';
import '../../css/v/vri-l7yab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="aqg2-5bbs"/><path class="kib7r1wvv"/><path class="kvsiuof9s"/><path class="vri-l7yab"/></g>`,
		"fallback": "streamline-freehand-color:server-error-404-not-found",
	});
}

export default Component;
