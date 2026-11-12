import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh1d8hbja.css';
import '../../css/p/p6gi491tx.css';
import '../../css/b/bk36q5c0k.css';
import '../../css/a/alcx3ebvo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh1d8hbja"/><path class="p6gi491tx"/><path class="bk36q5c0k"/><path class="alcx3ebvo"/>`,
		"fallback": "selfhst:sando-dark",
	});
}

export default Component;
