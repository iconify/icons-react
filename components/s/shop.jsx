import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xpue3xblo.css';
import '../../css/q/qv3c50bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xpue3xblo"/><path class="qv3c50bli"/></g>`,
		"fallback": "mage:shop",
	});
}

export default Component;
