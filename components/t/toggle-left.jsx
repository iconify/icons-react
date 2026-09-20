import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r2akiquzi.css';
import '../../css/u/uy3gc8bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="r2akiquzi"/><rect class="uy3gc8bci"/></g>`,
		"fallback": "lucide:toggle-left",
	});
}

export default Component;
