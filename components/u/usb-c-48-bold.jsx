import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hca0avbef.css';
import '../../css/g/gmcm_xa4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hca0avbef"/><path class="gmcm_xa4f"/>`,
		"fallback": "energy-icons:usb-c-48-bold",
	});
}

export default Component;
