import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4uu37bfu.css';
import '../../css/d/ds9qz1atr.css';
import '../../css/d/dmo352x4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z4uu37bfu"/><path clip-rule="evenodd" class="ds9qz1atr"/><path clip-rule="evenodd" class="dmo352x4a"/></g>`,
		"fallback": "healthicons:opthalmology2x-outline",
	});
}

export default Component;
