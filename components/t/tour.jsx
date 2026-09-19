import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpiteb51d.css';
import '../../css/v/v23tyc59y.css';
import '../../css/b/bfox5ubnm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpiteb51d"/><circle class="v23tyc59y"/><path class="bfox5ubnm"/>`,
		"fallback": "carbon:tour",
	});
}

export default Component;
