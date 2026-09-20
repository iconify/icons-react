import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ezohtbcjk.css';
import '../../css/w/wzwgr3bos.css';
import '../../css/a/a59_42btr.css';
import '../../css/i/iazw9mnub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGExGR1bRm)" class="cuyn6tgcc"><path class="ezohtbcjk"/><path class="wzwgr3bos"/><path class="a59_42btr"/></g><defs><clipPath id="SVGExGR1bRm"><path class="iazw9mnub"/></clipPath></defs></g>`,
		"fallback": "mage:line",
	});
}

export default Component;
