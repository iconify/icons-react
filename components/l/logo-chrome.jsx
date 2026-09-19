import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-tno59wh.css';
import '../../css/a/aauaucbby.css';
import '../../css/e/entpjs2ed.css';
import '../../css/o/o_w_uobpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-tno59wh"/><path class="aauaucbby"/><path class="entpjs2ed"/><path class="o_w_uobpq"/>`,
		"fallback": "ion:logo-chrome",
	});
}

export default Component;
