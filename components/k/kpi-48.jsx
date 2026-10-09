import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxbs21b9m.css';
import '../../css/e/ezub0eyvb.css';
import '../../css/f/fzbp9rx-j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxbs21b9m"/><path class="ezub0eyvb"/><path class="fzbp9rx-j"/>`,
		"fallback": "energy-icons:kpi-48",
	});
}

export default Component;
