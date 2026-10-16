import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgd8zfbzm.css';
import '../../css/w/wlbeejzvb.css';
import '../../css/e/emzzk7r6k.css';

const viewBox = {"width":1543.43,"height":320};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgd8zfbzm"/><path class="wlbeejzvb"/><path class="emzzk7r6k"/>`,
		"fallback": "thesvg-color:thingsboard-light",
	});
}

export default Component;
