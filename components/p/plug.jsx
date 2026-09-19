import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu20nsb-w.css';
import '../../css/h/h220zcbfh.css';
import '../../css/e/e_4x7sb2e.css';
import '../../css/i/iql33bbkv.css';
import '../../css/o/ow275bckj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xu20nsb-w"/><path class="h220zcbfh"/><path class="e_4x7sb2e"/><path clip-rule="evenodd" class="iql33bbkv"/><path class="ow275bckj"/></g>`,
		"fallback": "glyphs-poly:plug",
	});
}

export default Component;
