import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y24_45omj.css';
import '../../css/e/eft13r6pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y24_45omj"/><path class="eft13r6pp"/></g>`,
		"fallback": "reicon:pen-tool4-filled",
	});
}

export default Component;
