import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l1wls693y.css';
import '../../css/i/i-ml486ue.css';
import '../../css/d/dmqvzwbzf.css';
import '../../css/o/oida52bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l1wls693y wm-k"/><path class="i-ml486ue wm-a"/><path class="dmqvzwbzf wm-k"/><path class="oida52bfh wm-a"/></g>`,
		"fallback": "withicons:link-sketch",
	});
}

export default Component;
