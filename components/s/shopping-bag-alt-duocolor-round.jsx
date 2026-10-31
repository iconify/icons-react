import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h1ynb0bhj.css';
import '../../css/l/l13qv277c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h1ynb0bhj"/><path class="l13qv277c"/></g>`,
		"fallback": "coolicons:shopping-bag-alt-duocolor-round",
	});
}

export default Component;
