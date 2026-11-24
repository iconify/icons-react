import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emus6-b1j.css';
import '../../css/q/qrb2onfcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="emus6-b1j"/><path class="qrb2onfcb"/>`,
		"fallback": "lucide-extended:party-popper-filled",
	});
}

export default Component;
