import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt5vbccxc.css';
import '../../css/s/s6t1fwbej.css';
import '../../css/f/f57g08bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tt5vbccxc"/><path class="s6t1fwbej"/><path class="f57g08bdh"/>`,
		"fallback": "lucide-extended:router-filled",
	});
}

export default Component;
