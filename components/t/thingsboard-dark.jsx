import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
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
		"content": `<g class="n1mjunbsu"><path class="vgd8zfbzm"/><path class="wlbeejzvb"/><path class="emzzk7r6k"/></g>`,
		"fallback": "thesvg-color:thingsboard-dark",
	});
}

export default Component;
