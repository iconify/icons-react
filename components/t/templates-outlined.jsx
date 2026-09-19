import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdypsia2b.css';
import '../../css/h/hztfv9bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdypsia2b"/><path class="hztfv9bsf"/>`,
		"fallback": "eos-icons:templates-outlined",
	});
}

export default Component;
