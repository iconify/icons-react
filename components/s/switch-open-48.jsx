import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-dmmacii.css';
import '../../css/b/bo2mh3bzn.css';
import '../../css/u/ua8x71bme.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-dmmacii"/><path class="bo2mh3bzn"/><path class="ua8x71bme"/>`,
		"fallback": "energy-icons:switch-open-48",
	});
}

export default Component;
