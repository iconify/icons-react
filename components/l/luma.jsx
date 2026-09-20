import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bry_t2fre.css';
import '../../css/c/cv8_uxbtz.css';
import '../../css/t/tznmijrmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bry_t2fre"><path class="cv8_uxbtz"/><path class="tznmijrmf"/></g>`,
		"fallback": "thesvg:luma",
	});
}

export default Component;
