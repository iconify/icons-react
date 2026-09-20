import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su4gzdgfk.css';
import '../../css/a/am6ar_2xw.css';
import '../../css/o/ovver6v9k.css';
import '../../css/c/c_4m1fbtc.css';
import '../../css/k/kahoavbuc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="su4gzdgfk"/><path class="am6ar_2xw"/><path class="ovver6v9k"/><path class="c_4m1fbtc"/><path class="kahoavbuc"/>`,
		"fallback": "openmoji:tablet",
	});
}

export default Component;
