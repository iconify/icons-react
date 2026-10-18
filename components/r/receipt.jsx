import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a_-brebqd.css';
import '../../css/e/etmn7q95n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a_-brebqd"/><path class="etmn7q95n"/></g>`,
		"fallback": "vadivam:receipt",
	});
}

export default Component;
