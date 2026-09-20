import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qnhteeo2t.css';
import '../../css/t/tadluznmw.css';
import '../../css/k/k0iu2bsiw.css';
import '../../css/w/wb_85nb1u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qnhteeo2t"/><path class="tadluznmw"/><path class="k0iu2bsiw"/><path class="wb_85nb1u"/></g>`,
		"fallback": "streamline-color:location-pin-disabled",
	});
}

export default Component;
