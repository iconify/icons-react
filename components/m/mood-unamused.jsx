import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ptohnwrku.css';
import '../../css/j/jba_khbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ptohnwrku"/><path class="jba_khbaa"/></g>`,
		"fallback": "tabler:mood-unamused",
	});
}

export default Component;
