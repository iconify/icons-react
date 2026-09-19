import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zksiksp6c.css';
import '../../css/a/agirlsb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zksiksp6c"/><path class="agirlsb_y"/></g>`,
		"fallback": "hugeicons:mosque-05",
	});
}

export default Component;
