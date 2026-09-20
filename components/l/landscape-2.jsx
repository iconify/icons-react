import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/pseld3bah.css';
import '../../css/y/yxu020-kc.css';
import '../../css/d/dhl471b4a.css';
import '../../css/l/ldkkwxbud.css';
import '../../css/m/mqcdqoufx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="pseld3bah"/><path class="yxu020-kc"/><path class="dhl471b4a"/><path class="ldkkwxbud"/><path class="mqcdqoufx"/></g>`,
		"fallback": "streamline-sharp-color:landscape-2",
	});
}

export default Component;
