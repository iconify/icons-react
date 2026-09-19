import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f08q9dl9p.css';
import '../../css/k/kg5bfdcux.css';
import '../../css/s/s8od9eyyg.css';
import '../../css/d/dgzh063rl.css';
import '../../css/z/zdx9ddceq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="f08q9dl9p"/><circle class="f08q9dl9p"/><path class="kg5bfdcux"/><path class="s8od9eyyg"/><path class="dgzh063rl"/><path class="zdx9ddceq"/></g>`,
		"fallback": "hugeicons:radio-tower",
	});
}

export default Component;
