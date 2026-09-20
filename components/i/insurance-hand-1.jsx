import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zpbop_bst.css';
import '../../css/v/v45il3brl.css';
import '../../css/g/gtfx4rboy.css';
import '../../css/p/p8_r6o34d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zpbop_bst"/><path class="v45il3brl"/><path class="gtfx4rboy"/><path class="p8_r6o34d"/></g>`,
		"fallback": "streamline-flex-color:insurance-hand-1",
	});
}

export default Component;
