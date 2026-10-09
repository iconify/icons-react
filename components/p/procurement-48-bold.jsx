import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugy_83khr.css';
import '../../css/t/trs0klbtj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugy_83khr"/><path class="trs0klbtj"/>`,
		"fallback": "energy-icons:procurement-48-bold",
	});
}

export default Component;
