import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4e_esr8j.css';
import '../../css/k/kxwo0lbhm.css';
import '../../css/p/pj8n1ebvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d4e_esr8j"/><path class="kxwo0lbhm"/><path clip-rule="evenodd" class="pj8n1ebvk"/>`,
		"fallback": "solar:text-bold-duotone",
	});
}

export default Component;
