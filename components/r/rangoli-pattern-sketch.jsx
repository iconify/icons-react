import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k84skwu6c.css';
import '../../css/o/of5os0b0n.css';
import '../../css/o/or-u2cczz.css';
import '../../css/h/h9d8qibbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k84skwu6c wm-k"/><path class="of5os0b0n wm-k"/><path class="or-u2cczz wm-a"/><path class="h9d8qibbo wm-s"/></g>`,
		"fallback": "withicons:rangoli-pattern-sketch",
	});
}

export default Component;
