import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-98_hbbz.css';
import '../../css/z/zl44w455k.css';
import '../../css/i/ihr8kgbqh.css';
import '../../css/h/hm7iy3b-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-98_hbbz"/><path class="zl44w455k"/><path class="ihr8kgbqh"/><path class="hm7iy3b-a"/>`,
		"fallback": "ion:ios-image",
	});
}

export default Component;
