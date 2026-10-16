import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz6pfccwf.css';
import '../../css/k/kwpuslbzu.css';
import '../../css/d/d4ypccbfw.css';
import '../../css/j/j-7gwtb9y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz6pfccwf"/><path class="kwpuslbzu"/><path class="d4ypccbfw"/><path class="j-7gwtb9y"/>`,
		"fallback": "energy-icons:soil-carbon-20-bold",
	});
}

export default Component;
