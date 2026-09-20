import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ixdiu-boz.css';
import '../../css/k/kj8-njb7p.css';
import '../../css/t/tapiesbnb.css';
import '../../css/z/zv9ieru2c.css';
import '../../css/l/lbeu2r7gj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ixdiu-boz"/><path clip-rule="evenodd" class="kj8-njb7p"/><path class="tapiesbnb"/><path clip-rule="evenodd" class="zv9ieru2c"/><path class="lbeu2r7gj"/></g>`,
		"fallback": "pepicons-pencil:train-off",
	});
}

export default Component;
