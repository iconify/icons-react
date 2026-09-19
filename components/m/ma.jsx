import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qdgw7wbwn.css';
import '../../css/c/ctew7ohvk.css';
import '../../css/j/jn_dmmhcx.css';
import '../../css/w/wtcy6bb6a.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qdgw7wbwn"/><path class="ctew7ohvk"/><path class="jn_dmmhcx"/><path class="wtcy6bb6a"/></g>`,
		"fallback": "flagpack:ma",
	});
}

export default Component;
