import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6z068zxy.css';
import '../../css/m/md286fbip.css';
import '../../css/w/wdu6_l50z.css';
import '../../css/h/h9k36-38v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="h6z068zxy"/><g class="md286fbip"><path class="wdu6_l50z"/><path class="h9k36-38v"/></g></g>`,
		"fallback": "cryptocurrency-color:wbtc",
	});
}

export default Component;
