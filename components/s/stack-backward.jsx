import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b2ux04bzb.css';
import '../../css/l/lautonbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b2ux04bzb"/><path class="lautonbak"/></g>`,
		"fallback": "tabler:stack-backward",
	});
}

export default Component;
