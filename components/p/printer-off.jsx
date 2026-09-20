import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x-f33z91j.css';
import '../../css/g/gkwo4nyhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x-f33z91j"/><path class="gkwo4nyhm"/></g>`,
		"fallback": "tabler:printer-off",
	});
}

export default Component;
