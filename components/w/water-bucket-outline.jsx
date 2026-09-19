import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/imvi96b1n.css';
import '../../css/e/egk7vr19t.css';
import '../../css/v/v1g1o1cdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="imvi96b1n"/><path class="egk7vr19t"/><path class="v1g1o1cdi"/></g>`,
		"fallback": "bitcoin-icons:water-bucket-outline",
	});
}

export default Component;
