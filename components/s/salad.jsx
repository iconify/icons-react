import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-4y-zqxk.css';
import '../../css/c/c51h1kiux.css';
import '../../css/e/exr2mgbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k-4y-zqxk"/><path class="c51h1kiux"/><path class="exr2mgbvf"/></g>`,
		"fallback": "tabler:salad",
	});
}

export default Component;
