import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcfuqov3g.css';
import '../../css/e/en3-o2bvd.css';
import '../../css/i/i2qirabca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcfuqov3g"/><path class="en3-o2bvd"/><path class="i2qirabca"/>`,
		"fallback": "energy-icons:table-48-bold",
	});
}

export default Component;
