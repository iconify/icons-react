import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tbnji5bns.css';
import '../../css/a/a_wofybcr.css';
import '../../css/e/ewf0-bb4e.css';
import '../../css/j/jc_ebqbze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="tbnji5bns"/><path class="a_wofybcr"/><path class="ewf0-bb4e"/><path class="jc_ebqbze"/></g>`,
		"fallback": "streamline-plump-color:trending-content",
	});
}

export default Component;
