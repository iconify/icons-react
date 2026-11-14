import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c9ult2btp.css';
import '../../css/q/qdzi_jzoh.css';
import '../../css/g/ggell_ipy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c9ult2btp"/><path class="qdzi_jzoh"/><path class="ggell_ipy"/></g>`,
		"fallback": "hugeicons:mail-block-02",
	});
}

export default Component;
