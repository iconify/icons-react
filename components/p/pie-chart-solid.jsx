import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umbcrlb4m.css';
import '../../css/k/kmzsj98hw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umbcrlb4m"/><path class="kmzsj98hw"/>`,
		"fallback": "teenyicons:pie-chart-solid",
	});
}

export default Component;
