import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex9s0kk5d.css';
import '../../css/p/pvjrmx88k.css';
import '../../css/l/l7w7mb29j.css';
import '../../css/f/f9ihxbcgl.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex9s0kk5d"/><path class="pvjrmx88k"/><path class="l7w7mb29j"/><path class="f9ihxbcgl"/>`,
		"fallback": "tabler-flags:kyrgyzstan",
	});
}

export default Component;
