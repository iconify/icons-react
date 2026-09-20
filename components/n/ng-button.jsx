import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnsv-_bix.css';
import '../../css/n/n81tx26mw.css';
import '../../css/f/f-y67rbmu.css';
import '../../css/v/vngdzxbyc.css';
import '../../css/e/ed86nmtzv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mnsv-_bix"/><g class="n81tx26mw"><path class="f-y67rbmu"/><path class="vngdzxbyc"/></g><path class="ed86nmtzv"/>`,
		"fallback": "openmoji:ng-button",
	});
}

export default Component;
