import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/l-zmaub3t.css';
import '../../css/u/ukd1urbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="l-zmaub3t"/><path class="ukd1urbxp"/></g>`,
		"fallback": "matita:video",
	});
}

export default Component;
