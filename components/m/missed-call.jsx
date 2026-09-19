import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw0zruopo.css';
import '../../css/d/dubemw35h.css';
import '../../css/x/xshjxybet.css';
import '../../css/l/lwfwy-rgx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="iw0zruopo"><path class="dubemw35h"/><path class="xshjxybet"/></g><path class="lwfwy-rgx"/>`,
		"fallback": "flat-color-icons:missed-call",
	});
}

export default Component;
