import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuvjg7bnh.css';
import '../../css/b/bb-8rwkou.css';
import '../../css/i/iic0_9tig.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kuvjg7bnh"><path class="bb-8rwkou"/><path class="iic0_9tig"/></g>`,
		"fallback": "catppuccin:midi",
	});
}

export default Component;
