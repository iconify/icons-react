import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbncc194d.css';
import '../../css/r/rnfj33zxy.css';
import '../../css/x/xpiiaw94l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="xbncc194d"><path class="rnfj33zxy"/><path class="xpiiaw94l"/></g>`,
		"fallback": "teenyicons:pin-outline",
	});
}

export default Component;
