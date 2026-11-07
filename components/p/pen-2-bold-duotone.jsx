import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/n6l23acuc.css';
import '../../css/k/ktx3j7bbv.css';
import '../../css/r/rtzz5bc0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="n6l23acuc"/><path class="ktx3j7bbv"/></g><path class="rtzz5bc0b"/>`,
		"fallback": "solar:pen-2-bold-duotone",
	});
}

export default Component;
