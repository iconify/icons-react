import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4juqqlnl.css';
import '../../css/i/iuhmoacij.css';
import '../../css/w/wqpmlrbfh.css';
import '../../css/n/nja0j0bzj.css';
import '../../css/w/wuz_3z27l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4juqqlnl"/><path class="iuhmoacij"/><path class="wqpmlrbfh"/><path class="nja0j0bzj"/><path class="wuz_3z27l"/>`,
		"fallback": "fxemoji:videocasette",
	});
}

export default Component;
