import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/glrfvfvss.css';
import '../../css/l/l-tj_lb7g.css';
import '../../css/z/zctcw55nb.css';
import '../../css/s/swtvqgbvf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="glrfvfvss"/><path class="l-tj_lb7g"/><path class="zctcw55nb"/><path class="swtvqgbvf"/></g>`,
		"fallback": "glyphs:star-of-david-duo",
	});
}

export default Component;
