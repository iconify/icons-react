import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu_w7xh2p.css';
import '../../css/l/lmrkdploq.css';
import '../../css/s/sawgbjh1b.css';
import '../../css/m/molxzo9aq.css';
import '../../css/g/ggmdoxbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu_w7xh2p"/><path class="lmrkdploq"/><path class="sawgbjh1b"/><path class="molxzo9aq"/><path clip-rule="evenodd" class="ggmdoxbbl"/>`,
		"fallback": "token:lazio",
	});
}

export default Component;
