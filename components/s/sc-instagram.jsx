import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ag4ld1ntb.css';
import '../../css/t/tmhwtbj8d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ag4ld1ntb"/><path class="tmhwtbj8d"/></g>`,
		"fallback": "ei:sc-instagram",
	});
}

export default Component;
