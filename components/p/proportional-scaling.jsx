import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b0xhw3gtc.css';
import '../../css/f/foyc2nb7z.css';
import '../../css/b/btfw9mbtg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="b0xhw3gtc"/><path class="foyc2nb7z"/><path class="btfw9mbtg"/></g>`,
		"fallback": "icon-park:proportional-scaling",
	});
}

export default Component;
