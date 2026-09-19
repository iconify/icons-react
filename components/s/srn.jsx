import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iyxrald2c.css';
import '../../css/h/ha_czebom.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="iyxrald2c"/><path class="ha_czebom"/></g>`,
		"fallback": "cryptocurrency-color:srn",
	});
}

export default Component;
