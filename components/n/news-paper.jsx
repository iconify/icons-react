import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwhw-10ob.css';
import '../../css/c/chaahbcfj.css';
import '../../css/l/lmh-jnsnw.css';
import '../../css/e/eo5zdablv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zwhw-10ob"/><path clip-rule="evenodd" class="chaahbcfj"/><path class="lmh-jnsnw"/><path class="eo5zdablv"/></g>`,
		"fallback": "streamline-color:news-paper",
	});
}

export default Component;
