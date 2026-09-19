import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vm8ob7cuz.css';
import '../../css/v/vq51a2bep.css';
import '../../css/w/wwdkt39lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vm8ob7cuz"/><path class="vq51a2bep"/><path class="wwdkt39lk"/></g>`,
		"fallback": "iconoir:linux",
	});
}

export default Component;
