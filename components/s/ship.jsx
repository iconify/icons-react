import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nee-ygs9z.css';
import '../../css/q/q142uzbwd.css';
import '../../css/q/q5055ebxc.css';
import '../../css/t/tm65h-b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nee-ygs9z wm-k"/><path class="q142uzbwd wm-k"/><path class="q5055ebxc wm-k"/><path class="tm65h-b9m wm-a"/>`,
		"fallback": "withicons-bauhaus:ship",
	});
}

export default Component;
