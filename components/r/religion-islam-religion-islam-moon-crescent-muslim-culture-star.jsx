import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lrzkfbcnm.css';
import '../../css/r/rqtbzjbhb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lrzkfbcnm"/><path class="rqtbzjbhb"/></g>`,
		"fallback": "streamline:religion-islam-religion-islam-moon-crescent-muslim-culture-star",
	});
}

export default Component;
