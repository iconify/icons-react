import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwxv9fbho.css';
import '../../css/p/pchy-4bkg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gwxv9fbho"/><path class="pchy-4bkg"/></g>`,
		"fallback": "bi:universal-access-circle",
	});
}

export default Component;
