import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lwnyuac7m.css';
import '../../css/o/o3-0pkjoj.css';
import '../../css/t/tgtp_hsjq.css';
import '../../css/o/owf7idx3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lwnyuac7m wm-k"/><path class="o3-0pkjoj wm-a"/><path class="tgtp_hsjq wm-k"/><path class="owf7idx3m wm-a"/></g>`,
		"fallback": "withicons:shuffle-sketch",
	});
}

export default Component;
