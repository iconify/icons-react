import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bh231vjos.css';
import '../../css/c/cuiknfbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bh231vjos"/><path class="cuiknfbjd"/></g>`,
		"fallback": "vadivam:pizza",
	});
}

export default Component;
