import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/mhmzaqbcd.css';
import '../../css/v/vo43jhb0t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="mhmzaqbcd"/><path class="vo43jhb0t"/></g>`,
		"fallback": "marketeq:marshmallow-right",
	});
}

export default Component;
