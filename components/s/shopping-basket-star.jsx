import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/f/fxmxr8b0v.css';
import '../../css/s/s-z1vub5z.css';
import '../../css/a/a5x6b5bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="fxmxr8b0v"/><path class="s-z1vub5z"/><path class="a5x6b5bxd"/></g>`,
		"fallback": "streamline-cyber:shopping-basket-star",
	});
}

export default Component;
