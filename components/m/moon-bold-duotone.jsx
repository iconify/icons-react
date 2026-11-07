import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyt4yhbtg.css';
import '../../css/p/p4ej_wfwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oyt4yhbtg"/><path class="p4ej_wfwi"/>`,
		"fallback": "solar:moon-bold-duotone",
	});
}

export default Component;
