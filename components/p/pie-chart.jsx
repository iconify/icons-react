import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7dwa2e_z.css';
import '../../css/w/wd-20gb_a.css';
import '../../css/g/gzv9kc5wi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7dwa2e_z"/><path class="wd-20gb_a"/><path class="gzv9kc5wi"/>`,
		"fallback": "flat-color-icons:pie-chart",
	});
}

export default Component;
