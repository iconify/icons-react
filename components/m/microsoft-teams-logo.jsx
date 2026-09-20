import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u5pv4p5ws.css';
import '../../css/q/qs_l1pb7p.css';
import '../../css/i/itklqpqef.css';
import '../../css/l/lhc71cmzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="u5pv4p5ws"/><path class="qs_l1pb7p"/><path class="itklqpqef"/><path class="lhc71cmzy"/></g>`,
		"fallback": "streamline-logos:microsoft-teams-logo",
	});
}

export default Component;
