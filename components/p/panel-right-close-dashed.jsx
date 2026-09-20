import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lkgbbu07j.css';
import '../../css/l/lx9jc3bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lkgbbu07j"/><path class="lx9jc3bxn"/></g>`,
		"fallback": "keyline-icons:panel-right-close-dashed",
	});
}

export default Component;
