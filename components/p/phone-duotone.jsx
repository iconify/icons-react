import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7e9-ibfi.css';
import '../../css/k/ksyanacfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7e9-ibfi"/><path clip-rule="evenodd" class="ksyanacfs"/>`,
		"fallback": "lets-icons:phone-duotone",
	});
}

export default Component;
