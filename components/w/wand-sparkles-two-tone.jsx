import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nn3_43btn.css';
import '../../css/j/j0phls-he.css';
import '../../css/w/wqb631yja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nn3_43btn"/><path class="j0phls-he"/><path class="wqb631yja"/></g>`,
		"fallback": "keyline-icons:wand-sparkles-two-tone",
	});
}

export default Component;
