import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbb50ac0d.css';
import '../../css/a/ax8q1_b6f.css';
import '../../css/w/waw_c6bot.css';
import '../../css/h/hkmfzxban.css';
import '../../css/d/dwqapubbg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbb50ac0d"/><path class="ax8q1_b6f"/><path class="waw_c6bot"/><path class="hkmfzxban"/><path class="dwqapubbg"/>`,
		"fallback": "catppuccin:pixi",
	});
}

export default Component;
