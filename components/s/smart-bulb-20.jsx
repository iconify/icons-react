import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewk2or1yh.css';
import '../../css/v/vuc2o48vf.css';
import '../../css/u/uofloxbgp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewk2or1yh"/><path class="vuc2o48vf"/><path class="uofloxbgp"/>`,
		"fallback": "energy-icons:smart-bulb-20",
	});
}

export default Component;
