import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/lg492db7d.css';
import '../../css/l/l42viqmux.css';
import '../../css/h/huw08fbqg.css';
import '../../css/s/s6ytvubnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="lg492db7d"/><path class="l42viqmux"/><path class="huw08fbqg"/><path class="s6ytvubnv"/></g>`,
		"fallback": "matita:maximize",
	});
}

export default Component;
