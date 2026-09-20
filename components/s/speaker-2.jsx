import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/c/cka-_1bjj.css';
import '../../css/w/wn1g3hx3l.css';
import '../../css/t/t2m_7ccmw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="cka-_1bjj"/><path class="wn1g3hx3l"/><path class="t2m_7ccmw"/></g>`,
		"fallback": "streamline-plump:speaker-2",
	});
}

export default Component;
