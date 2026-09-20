import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mot0enb-y.css';
import '../../css/b/blad_456u.css';
import '../../css/c/cf_fpwv8i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mot0enb-y"/><path class="blad_456u"/><path class="cf_fpwv8i"/></g>`,
		"fallback": "streamline-color:speaker-2-flat",
	});
}

export default Component;
