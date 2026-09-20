import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jnoc-ab0b.css';
import '../../css/b/b6omybbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jnoc-ab0b"/><path class="b6omybbji"/></g>`,
		"fallback": "tabler:smart-home-off",
	});
}

export default Component;
