import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljtilgcpm.css';
import '../../css/q/qmefr1b9h.css';
import '../../css/h/hsyg8kbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljtilgcpm"/><path clip-rule="evenodd" class="qmefr1b9h"/><path class="hsyg8kbzj"/>`,
		"fallback": "solar:passport-minimalistic-bold-duotone",
	});
}

export default Component;
