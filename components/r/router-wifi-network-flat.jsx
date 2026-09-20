import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rvqnfbaaf.css';
import '../../css/t/tt5hhcckr.css';
import '../../css/y/y8oq2gb1u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rvqnfbaaf"/><path class="tt5hhcckr"/><path class="y8oq2gb1u"/></g>`,
		"fallback": "streamline-flex-color:router-wifi-network-flat",
	});
}

export default Component;
