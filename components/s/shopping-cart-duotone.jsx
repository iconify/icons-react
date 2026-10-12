import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m46u17bhf.css';
import '../../css/k/kpelmd84r.css';
import '../../css/z/zfdth432z.css';
import '../../css/j/ja581zbzh.css';
import '../../css/t/tcgpzkjkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m46u17bhf"/><path class="kpelmd84r"/><path class="zfdth432z"/><path class="ja581zbzh"/><path class="tcgpzkjkk"/></g>`,
		"fallback": "lucide-extended:shopping-cart-duotone",
	});
}

export default Component;
