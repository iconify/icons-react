import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om_2m0e4d.css';
import '../../css/b/bg9q4obqt.css';
import '../../css/s/see0y-btr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om_2m0e4d"/><path class="bg9q4obqt"/><path class="see0y-btr"/>`,
		"fallback": "energy-icons:monitor-48-bold",
	});
}

export default Component;
