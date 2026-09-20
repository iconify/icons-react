import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k52rupvjk.css';
import '../../css/f/fh6a-dbrt.css';
import '../../css/d/d6_3dnf9e.css';
import '../../css/x/xg5_7ua0m.css';
import '../../css/s/s_v9kyb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k52rupvjk"/><path class="fh6a-dbrt"/><path class="d6_3dnf9e"/><path class="xg5_7ua0m"/><path class="s_v9kyb0u"/></g>`,
		"fallback": "solar:trash-bin-minimalistic-line-duotone",
	});
}

export default Component;
