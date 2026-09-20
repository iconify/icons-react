import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bm2qq7b1z.css';
import '../../css/r/rimuh7bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="bm2qq7b1z"/><path class="rimuh7bpm"/></g>`,
		"fallback": "keyline-icons:search-2-minus-fill",
	});
}

export default Component;
