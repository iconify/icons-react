import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spf7r7h-h.css';
import '../../css/p/pqi-gtarw.css';
import '../../css/j/joab4p6un.css';
import '../../css/x/xiyy7obpd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spf7r7h-h"/><circle class="pqi-gtarw"/><circle class="joab4p6un"/><path class="xiyy7obpd"/>`,
		"fallback": "selfhst:matomo",
	});
}

export default Component;
