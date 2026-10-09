import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdk3tib5a.css';
import '../../css/s/s61-nmb9n.css';
import '../../css/o/ozbsdeb5e.css';
import '../../css/u/up_jo7btn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdk3tib5a"/><path class="s61-nmb9n"/><path class="ozbsdeb5e"/><path class="up_jo7btn"/>`,
		"fallback": "energy-icons:podcast-48-bold",
	});
}

export default Component;
