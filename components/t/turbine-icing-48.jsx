import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjz_t6bds.css';
import '../../css/q/q4r8_6iob.css';
import '../../css/t/t100656sa.css';
import '../../css/v/vfuw7m6dq.css';
import '../../css/b/bdof1db3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjz_t6bds"/><path class="q4r8_6iob"/><path class="t100656sa"/><path class="vfuw7m6dq"/><path class="bdof1db3i"/>`,
		"fallback": "energy-icons:turbine-icing-48",
	});
}

export default Component;
