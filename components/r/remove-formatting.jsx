import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hn1a-cboy.css';
import '../../css/z/zbpzk_byh.css';
import '../../css/j/jpk91-9vh.css';
import '../../css/p/phkqhabet.css';
import '../../css/h/hq6f8gbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hn1a-cboy wm-shadow"/><path class="wm-shadow zbpzk_byh"/><path class="jpk91-9vh"/><path class="phkqhabet"/><path class="hq6f8gbyz wm-s"/></g>`,
		"fallback": "withicons-brutal:remove-formatting",
	});
}

export default Component;
