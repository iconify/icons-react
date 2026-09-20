import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsxsfpvgo.css';
import '../../css/x/xtl9ywb6b.css';
import '../../css/u/u4l9xgbym.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/m/mehba9vbc.css';
import '../../css/i/ir-4gvm9i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsxsfpvgo"/><path class="xtl9ywb6b"/><path class="u4l9xgbym"/><g class="brzn_0bpr"><path class="mehba9vbc"/><path class="ir-4gvm9i"/></g>`,
		"fallback": "openmoji:square-with-lower-right-diagonal-black",
	});
}

export default Component;
