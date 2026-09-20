import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hbralqw_e.css';
import '../../css/c/c3crl-fho.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hbralqw_e"/><path class="c3crl-fho"/></g>`,
		"fallback": "streamline-flex-color:open-umbrella-flat",
	});
}

export default Component;
