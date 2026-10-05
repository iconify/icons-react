import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/lk9a7sn2f.css';
import '../../css/v/vvq5aqitv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="lk9a7sn2f"/><path class="vvq5aqitv"/></g>`,
		"fallback": "matita:thumbs-up",
	});
}

export default Component;
