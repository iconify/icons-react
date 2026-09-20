import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h7sj2bpqa.css';
import '../../css/j/jt4xktbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h7sj2bpqa"/><path class="jt4xktbti"/></g>`,
		"fallback": "keyline-icons:thumbs-up-two-tone",
	});
}

export default Component;
