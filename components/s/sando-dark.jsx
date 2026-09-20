import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh1d8hbja.css';
import '../../css/a/anlboq3_k.css';
import '../../css/t/thpezsbat.css';
import '../../css/k/k7_jydbdb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh1d8hbja"/><path class="anlboq3_k"/><path class="thpezsbat"/><path class="k7_jydbdb"/>`,
		"fallback": "selfhst:sando-dark",
	});
}

export default Component;
