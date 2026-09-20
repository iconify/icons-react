import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tt8nogban.css';
import '../../css/j/j50bpe_fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="tt8nogban"/><path class="j50bpe_fv"/></g>`,
		"fallback": "meteor-icons:reddit",
	});
}

export default Component;
