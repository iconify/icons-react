import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdfpdkohr.css';
import '../../css/w/wewzkacif.css';
import '../../css/q/qodh6v76z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdfpdkohr"/><path class="wewzkacif"/><path class="qodh6v76z"/>`,
		"fallback": "energy-icons:solar-monitoring-20",
	});
}

export default Component;
