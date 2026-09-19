import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvstvtsqi.css';
import '../../css/e/ehmjtr_qq.css';
import '../../css/o/oh-gh1bfa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fvstvtsqi"/><path clip-rule="evenodd" class="ehmjtr_qq"/><path class="oh-gh1bfa"/></g>`,
		"fallback": "glyphs:virus-outline",
	});
}

export default Component;
