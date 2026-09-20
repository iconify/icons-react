import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqb90zg8x.css';
import '../../css/u/u68ln9bww.css';
import '../../css/n/nk7gh4h2a.css';
import '../../css/q/q6c-q2b0p.css';
import '../../css/d/dtmcvvnkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqb90zg8x"/><path class="u68ln9bww"/><path class="nk7gh4h2a"/><path class="q6c-q2b0p"/><path class="dtmcvvnkj"/>`,
		"fallback": "selfhst:ksuite-points",
	});
}

export default Component;
