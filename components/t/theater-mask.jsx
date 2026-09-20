import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6wsf9bod.css';
import '../../css/x/x23wg-blv.css';
import '../../css/z/zqn5c1w6w.css';
import '../../css/b/bc9np79cj.css';
import '../../css/z/zsyj5hbab.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p6wsf9bod"/><path class="x23wg-blv"/><path class="zqn5c1w6w"/><path class="bc9np79cj"/><path class="zsyj5hbab"/></g>`,
		"fallback": "streamline-flex-color:theater-mask",
	});
}

export default Component;
