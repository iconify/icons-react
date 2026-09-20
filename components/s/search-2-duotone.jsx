import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tazu73b4s.css';
import '../../css/r/rimuh7bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tazu73b4s"/><path class="rimuh7bpm"/></g>`,
		"fallback": "keyline-icons:search-2-duotone",
	});
}

export default Component;
