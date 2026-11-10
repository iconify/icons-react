import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wxiu-kttg.css';
import '../../css/s/s3iryr3kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wxiu-kttg"/><path class="s3iryr3kc"/></g>`,
		"fallback": "matita:theta-capital",
	});
}

export default Component;
