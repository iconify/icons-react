import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/x/xo048r81s.css';
import '../../css/v/vn_89gbyq.css';
import '../../css/i/ihr4t-53j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="xo048r81s"/><path class="vn_89gbyq"/><rect class="ihr4t-53j"/></g>`,
		"fallback": "icon-park:surprised-face-with-open-mouth",
	});
}

export default Component;
