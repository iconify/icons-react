import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qco7k5bdx.css';
import '../../css/v/vzotpc4wt.css';
import '../../css/o/o9g704bia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qco7k5bdx"/><path class="vzotpc4wt wm-k"/><path class="o9g704bia wm-a"/></g>`,
		"fallback": "withicons:traffic-light-sketch",
	});
}

export default Component;
