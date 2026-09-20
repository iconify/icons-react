import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/daeic2bsz.css';
import '../../css/j/jqox6bo7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="daeic2bsz"/><path class="jqox6bo7b"/></g>`,
		"fallback": "tabler:math-max",
	});
}

export default Component;
