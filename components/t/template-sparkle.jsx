import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgssiu7uc.css';
import '../../css/w/wh80adswx.css';
import '../../css/v/vysufwb5l.css';
import '../../css/e/e49-dr4mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kgssiu7uc"/><path class="wh80adswx"/><path class="vysufwb5l"/><path class="e49-dr4mf"/></g>`,
		"fallback": "andrsrxn:template-sparkle",
	});
}

export default Component;
