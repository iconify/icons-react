import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cuww4ebyp.css';
import '../../css/u/ud96t5w0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cuww4ebyp"/><path class="ud96t5w0e"/></g>`,
		"fallback": "tabler:rotate-360",
	});
}

export default Component;
