import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sar97seze.css';
import '../../css/e/eoo863bjz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="sar97seze"/><path class="eoo863bjz"/></g>`,
		"fallback": "streamline-flex:thread-post-tweet",
	});
}

export default Component;
