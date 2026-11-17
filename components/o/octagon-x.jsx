import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bw2e53iyy.css';
import '../../css/m/mnowo9bkj.css';
import '../../css/v/v1--xxbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="bw2e53iyy"/><path class="mnowo9bkj"/><path class="v1--xxbjs"/></g>`,
		"fallback": "matita:octagon-x",
	});
}

export default Component;
