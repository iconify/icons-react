import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a0sguvbwp.css';
import '../../css/l/lq5smqilw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="a0sguvbwp"/><path class="lq5smqilw"/></g>`,
		"fallback": "matita:tree",
	});
}

export default Component;
