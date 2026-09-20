import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lok1vab1w.css';
import '../../css/a/aukxkfh_w.css';
import '../../css/l/l50czp3km.css';
import '../../css/z/zg2dzdq3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lok1vab1w"/><path class="aukxkfh_w"/><path class="l50czp3km"/><path class="zg2dzdq3z"/></g>`,
		"fallback": "reicon:money-bill-coin",
	});
}

export default Component;
