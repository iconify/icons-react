import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mkih2u7bz.css';
import '../../css/z/zbfn2vbyz.css';
import '../../css/t/td2s06bfd.css';
import '../../css/p/pc5byxbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mkih2u7bz"/><path clip-rule="evenodd" class="zbfn2vbyz"/><path class="td2s06bfd"/><path class="pc5byxbam"/></g>`,
		"fallback": "reicon:treadmill2-duotone",
	});
}

export default Component;
