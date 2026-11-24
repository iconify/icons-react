import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpyifib8k.css';
import '../../css/i/irp5xvbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpyifib8k"/><path class="irp5xvbmt"/>`,
		"fallback": "lucide-extended:phone-log-filled",
	});
}

export default Component;
