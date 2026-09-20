import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibyslbbmf.css';
import '../../css/y/yriz58ygt.css';
import '../../css/e/edcck1bde.css';
import '../../css/c/c_i86nvgr.css';
import '../../css/m/mobllh9wk.css';
import '../../css/i/i1w0hl7az.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibyslbbmf"/><path class="yriz58ygt"/><path class="edcck1bde"/><path class="c_i86nvgr"/><path class="mobllh9wk"/><path class="i1w0hl7az"/>`,
		"fallback": "selfhst:jwt-io",
	});
}

export default Component;
